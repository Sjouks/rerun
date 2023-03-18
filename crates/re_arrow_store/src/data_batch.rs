use arrow2::array::Array;
use nohash_hasher::IntMap;
use re_log_types::{
    component_types::InstanceKey,
    external::arrow2_convert::serialize::TryIntoArrow,
    msg_bundle::{wrap_in_listarray, ComponentBundle, MsgBundleError, SerializableComponent},
    ComponentName, EntityPath, MsgId, Time, TimeInt, TimePoint, Timeline,
};

// TODO:
// - this file prob should be called `events.rs` or smth

// TODO: benchmarks showing the efficiency (..or not) of the batching mechanism

// TODO:
// - want to be able to build event by event

// TODO: do we have an EventCell then?
//
// TODO:
// - sometimes you wanna build cell by cell, sometimes row by row, sometimes a whole batch at a
// time?
// - a batch at a time is interesting in that you can either build that on a col by col basis or
// row by row basis?

// TODO: should `Event` be called `Row`?
//
// - DataCell
// - DataRow (+ alias `Event`?)
// - DataBatch
//
// - DataCellBuilder
// - DataRowBuilder (+ alias `EventBuilder`?)
// - DataBatchBuilder
//
// - EventId
// - BatchId

// One row, one event ID, multiple timestamps, multiple instances
pub struct Event {
    // TODO:
    // - timepoint
    // - num_instances
    // - entity_path
    //
    // TODO: replace with an actual event ID
    id: MsgId,
    timepoint: TimePoint,
    entity_path: EntityPath,

    num_instances: u32, // TODO: do we have any actual limit somewhere?
    components: IntMap<ComponentName, Box<dyn arrow2::array::Array>>,
}

/// Errors that can occur when constructing or sending messages
/// using [`EventBuilder`].
#[derive(thiserror::Error, Debug)]
pub enum EventBuilderError {
    /// The same component were put in the same log message multiple times.
    /// E.g. `with_component()` was called multiple times for `Point3D`.
    /// We don't support that yet.
    #[error(
        "All component collections must have exactly one row (i.e. no batching), got {0:?} instead. Perhaps with_component() was called multiple times with the same component type?"
    )]
    MoreThanOneRow(Vec<(ComponentName, usize)>),

    /// Some components had more or less instances than some other.
    /// For example, there were `10` positions and `8` colors.
    #[error(
        "All component collections must share the same number of instances (i.e. row length) \
            for a given row, got {0:?} instead"
    )]
    MismatchedRowLengths(Vec<(ComponentName, usize)>),

    /// Instance keys cannot be splatted
    #[error("Instance keys cannot be splatted")]
    SplattedInstanceKeys,

    /// [`InstanceKey`] with a [`u64::MAX`] was found, but is reserved for Rerun internals.
    #[error("InstanceKey(u64::MAX) is reserved for Rerun internals")]
    IllegalInstanceKey,

    // TODO
    /// A message during packing. See [`MsgBundleError`].
    #[error(transparent)]
    PackingError(#[from] MsgBundleError),
}

pub struct EventBuilder {
    // NOTE: Don't compute ID yet, we want the timestamp from the tuid to correspond to the time
    // where the event is actually instantiated for real.
    timeless: bool,
    timepoint: TimePoint,
    entity_path: EntityPath,

    // TODO: do we have any actual limit somewhere? it should technically be i32 i guess?
    num_instances: Option<u32>,
    instances: Option<Vec<InstanceKey>>,

    // TODO: should components be ListArrays?
    components: IntMap<ComponentName, Box<dyn arrow2::array::Array>>,
}

// TODO: is log_time still a thing? do we just keep track of the timestamp wrapped in the event id?
// that's kinda related to the whole timeless thing I think

impl EventBuilder {
    /// Starts a new `EventBuilder` for the given entity path.
    ///
    /// It is during this call that the logging time for the event is recorded!
    //
    // TODO: document num_instances
    pub fn new(entity_path: impl Into<EntityPath>, num_instances: u32) -> Self {
        Self {
            timeless: false,
            timepoint: [(Timeline::log_time(), Time::now().into())].into(),
            entity_path: entity_path.into(),

            num_instances: Some(num_instances),
            instances: None,

            components: Default::default(),
        }
    }

    // TODO
    pub fn with_instances(entity_path: impl Into<EntityPath>, instances: Vec<InstanceKey>) -> Self {
        Self {
            timeless: false,
            timepoint: [(Timeline::log_time(), Time::now().into())].into(),
            entity_path: entity_path.into(),

            num_instances: None,
            instances: Some(instances),

            components: Default::default(),
        }
    }

    // --- Time ---

    /// Appends a given `timepoint` to the current event.
    ///
    /// This can be called any number of times. In case of collisions, last write wins.
    /// I.e. if `timepoint` contains a timestamp `ts1` for a timeline `my_time` and the current
    /// event already has a timestamp `ts0` for that same timeline, then the new value (`ts1`)
    /// will overwrite the existing value (`ts0`).
    ///
    /// `EventBuilder` automatically keeps track of the logging time, which is recorded when
    /// [`Self::new`] is first called.
    #[inline]
    pub fn with_timepoint(mut self, timepoint: TimePoint) -> Self {
        for (timeline, time) in timepoint {
            self.timepoint.insert(timeline, time);
        }
        self
    }

    /// Appends a given `timeline`/`time` pair to the current event.
    ///
    /// This can be called any number of times. In case of collisions, last write wins.
    /// I.e. if the current event already has a timestamp value for that `timeline`, then the
    /// new `time` value that was just passed in will overwrite it.
    ///
    /// `EventBuilder` automatically keeps track of the logging time, which is recorded when
    /// [`Self::new`] is first called.
    #[inline]
    pub fn with_time(mut self, timeline: Timeline, time: impl Into<TimeInt>) -> Self {
        self.timepoint.insert(timeline, time.into());
        self
    }

    /// Specifies whether the current event is timeless.
    ///
    /// A timeless event will drop all of its timestamp data before being sent to Rerun.
    /// Timeless data is present on all timelines and behaves as if it was recorded infinitely far
    /// into the past.
    ///
    /// Always `false` by default.
    //
    // TODO: `is_timeless` instead?
    #[inline]
    pub fn with_timeless(mut self, timeless: bool) -> Self {
        self.timeless = timeless;
        self
    }

    // --- Components ---

    /// Appends a component collection to the current message, i.e. multiple instances of the same
    /// component type.
    ///
    /// TODO: dont say row-length
    /// All component collections stored in the message must have the same row-length (i.e. number
    /// of instances)!
    /// The row-length of the first appended collection is used as ground truth.
    ///
    /// ⚠ This can only be called once per type of component!
    /// The SDK does not yet support batch insertions, which are semantically identical to adding
    /// the same component type multiple times in a single message.
    /// Doing so will return an error when trying to `send()` the message.
    //
    // TODO(#589): batch insertions
    pub fn with_component_collection<'a, C: SerializableComponent>(
        mut self,
        data: impl IntoIterator<Item = &'a C>,
    ) -> Result<Self, EventBuilderError> {
        // TODO:
        // - error if component is already set? or warn? or overwrite??
        // - error if instances don't match

        let bundle = bundle_from_iter(data)?;

        let num_instances = bundle.num_instances(0).unwrap(); // must have exactly 1 row atm

        // If this is the first appended collection, it gets to decide the row-length (i.e. number
        // of instances) of all future collections.
        if self.num_instances.is_none() {
            self.num_instances = Some(num_instances);
        }

        // Detect mismatched row-lengths early on... unless it's a Transform bundle: transforms
        // behave differently and will be sent in their own message!
        if C::name() != Transform::name() && self.num_instances.unwrap() != num_instances {
            let collections = self
                .instanced
                .into_iter()
                .map(|bundle| (bundle.name(), bundle.num_instances(0).unwrap_or(0)))
                .collect();
            return Err(EventBuilderError::MismatchedRowLengths(collections));
        }

        // TODO(cmc): if this is an InstanceKey and it contains u64::MAX, fire IllegalInstanceKey.

        self.instanced.push(bundle);

        Ok(self)
    }
}

// TODO: let's keep the whole MsgBundle thing for now i guess?
// TODO: `MsgBundleError`??!
// TODO: ComponentBundle should prob leave here too
fn bundle_from_iter<'a, C: SerializableComponent>(
    data: impl IntoIterator<Item = &'a C>,
) -> Result<ComponentBundle, MsgBundleError> {
    // TODO(cmc): Eeeh, that's not ideal to repeat that kind of logic in here, but orphan rules
    // kinda force us to :/

    let array: Box<dyn Array> = TryIntoArrow::try_into_arrow(data)?;
    let wrapped = wrap_in_listarray(array);

    Ok(ComponentBundle::new(C::name(), wrapped))
}

// TODO: shall we have a ArrowEvent or smth?

// Multiple rows of data, multiple event IDs & 1 event batch ID, ...?
// Concatenated.
//
// TODO:
// - batch by space & time.. how?
// - doc
// TODO: client-side sanity checking
//
// TODO: this ultimately compiles down into a `Chunk`.
pub struct EventBatch {
    // TODO: replace with an actual batch ID
    id: MsgId,
}

// TODO: shall we have a ArrowEventBatch or smth?

// TODO:
// - event_id (use msg_id for now, doesnt matter)
//   special: TODO
// - timelines: log_time, frame_nr, etc (well, timepoint then I guess)
// - num_instances (fixes the splat mess)
//   special: TODO
// - entity_path

// TODO:
// - fix splat mess
