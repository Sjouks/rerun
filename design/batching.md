# End-to-end batching

A design proposal for end-to-end data batches, from their creation on the client SDK and all the way until their end of life (GC).

This redesign and the major changes involved also present an opportunity to address some of the long-standing design flaws in the datastore.

- Where are we today?
- Where do we want to go and why?
- How do we get there?
- What does the future look like beyond batching?
- Try and keep note of all the good ideas that came up during discussions around batching
- Gather all the information needed for a future technical blog post about the datastore

TL;DR: A big braindump that contains a lot of discussions and design thoughts that have been thrown around during the last few weeks, just to make sure it doesn't all get lost to time... I'm sure that there are things that I've missed however, so please say so if you think of anything.

---

Status: proposal

- [Why](#why)
- [Status quo](#status-quo)
  * [Creation](#creation)
  * [Transport](#transport)
  * [Storage](#storage)
  * [Write path](#write-path)
  * [Read path](#read-path)
    + [LatestAt (random-access like)](#latestat--random-access-like-)
    + [Range (timeseries like)](#range--timeseries-like-)
  * [Garbage Collection](#garbage-collection)
  * [Save-to-disk](#save-to-disk)
- [Proposal](#proposal)
  * [Creation](#creation-1)
  * [Transport](#transport-1)
  * [Storage](#storage-1)
  * [Write path](#write-path-1)
  * [Read path](#read-path-1)
    + [LatestAt (random-access like)](#latestat--random-access-like--1)
    + [Range (timeseries like)](#range--timeseries-like--1)
  * [Garbage Collection](#garbage-collection-1)
  * [Save-to-disk](#save-to-disk-1)
  * [Repercussions / Worth mentioning](#repercussions---worth-mentioning)
- [Implementation plan](#implementation-plan)
- [Future work](#future-work)
  * [Dedicated storage for timeseries](#dedicated-storage-for-timeseries)
  * [Write our own arrow2-convert](#write-our-own-arrow2-convert)
  * [Recursive clears native to the store](#recursive-clears-native-to-the-store)
  * [Native file format for writing the store to disk](#native-file-format-for-writing-the-store-to-disk)
  * [Derived components & components converter mappings](#derived-components---components-converter-mappings)
  * [no need to pass full schema for known/builtin components](#no-need-to-pass-full-schema-for-known-builtin-components)
  * [post-GC latest-at correctness](#post-gc-latest-at-correctness)
  * [drop-after semantics (undo/redo)](#drop-after-semantics--undo-redo-)

---

## Why

The proposed implementation aims to address several issues and provide numerous benefits, including:
- A significant reduction in the space overhead of `LogMsg`s during transport, in memory, and on disk.
- Resolution of splat issues that currently require dedicated events/rows to function.
- Resolution of the dreaded `MsgId` mismatch issues.
- Replacement of the current hackish and partially broken garbage collection mechanism with a more viable one.
- Should massively improve the speed of range queries (even more so for our so-called sticky scenes).
- Should (likely) vastly improve the loading speed of .rrd files (even more so on the web).

Finally, these changes are expected to significantly simplify the DataStore codebase by completely eliminating component tables and their corresponding buckets.

## Status quo

The data goes through several distinct stages during its lifetime:
- Creation
- Transport
- Storage
- Write path
- Read path
- GC
- Save-to-disk

### Creation

At present, the client is limited to creating a single event at a time, corresponding to a single row of data. Each row contains N components, each of which can hold M instances for a given entity across P timelines.

To begin the process, the SDK creates a `ComponentBundle`, which can be thought of as a data cell within a dataframe. This `ComponentBundle` is essentially a list of values for a specific component type. Keep in mind we only ever work with lists, rather than individual values.  
From this point forward, the individual values in these lists are referred to as "component instances" (:warning: "component instances" != "instance keys").

```rust
pub struct ComponentBundle {
    /// The name of the Component, used as column name in the table `Field`.
    name: ComponentName,

    /// The Component payload `Array`.
    value: ListArray<i32>,
}
```

These `ComponentBundle`s are then packed into a `MsgBundle`:
```rust
pub struct MsgBundle {
    /// A unique id per [`crate::LogMsg`].
    pub msg_id: MsgId,
    pub entity_path: EntityPath,
    pub time_point: TimePoint,
    pub components: Vec<ComponentBundle>,
}
```
which corresponds to _1 event_, i.e. 1 row's worth of data for 1 entity in N timelines.  
This event is uniquely identified with a `MsgId`, which is a `TUID` under the hood (wall-clock UID).

The number of component instances for all columns, or components, in a given row is determined by examining the number of instances for the first entry in the `components` list. However, this approach has a significant flaw: all components must have the same number of instances.  
This requirement creates a situation where splats, with a single instance, and clears, with no instances, must be sent in separate `MsgBundle`s.

As part of packing the `MsgBundle`, we convert the `MsgId` itself into a `ComponentBundle` by cloning it as many times as necessary to match the number of instances. We do this because we need the `MsgId` information later for garbage collection purposes.  
However, this approach presents a challenge for clears, which have zero instances. As a result, messages that contain zero instances cannot be garbage collected as of today.

### Transport

In general, data is transmitted as an Arrow table, where each row (of which there is only ever a single one at present) represents a multi-timeline event. Each column can be either a component or a timepoint, and each cell contains a list of component instances for a given component type.

However, in practice, timepoints and components are stored separately within the chunk. This separation facilitates the identification and extraction of the time data, which receives special treatment in later stages (as discussed in the following sections).

In concrete terms, the SDK transforms the `MsgBundle` into an `ArrowMsg`, which is ready to be serialized and sent over the wire:
```rust
pub struct ArrowMsg {
    /// A unique id per [`crate::LogMsg`].
    pub msg_id: MsgId,

    /// Arrow schema
    pub schema: arrow2::Schema,

    /// Arrow chunk
    pub chunk: arrow2::Chunk<Box<dyn Array>>,
}
```

Taking a closer look at the `arrow2::Schema` of the `chunk` gives the complete story:
```rust
Schema {
    fields: [
        Field {
            name: "timelines",
            data_type: List(
                Field {
                    name: "item",
                    data_type: Struct([
                        Field { name: "timeline", data_type: Utf8, is_nullable: false, metadata: {}, },
                        Field { name: "type", data_type: UInt8, is_nullable: false, metadata: {}, },
                        Field { name: "time", data_type: Int64, is_nullable: false, metadata: {}, },
                    ]),
                    is_nullable: true,
                    metadata: {},
                },
            ),
            is_nullable: false,
            metadata: {},
        },
        Field {
            name: "components",
            data_type: Struct([
                Field {
                    name: "rerun.text_entry",
                    data_type: List(
                        Field {
                            name: "item",
                            data_type: Struct([
                                Field { name: "body", data_type: Utf8, is_nullable: false, metadata: {}, },
                                Field { name: "level", data_type: Utf8, is_nullable: true, metadata: {}, },
                            ]),
                            is_nullable: true,
                            metadata: {},
                        },
                    ),
                    is_nullable: false,
                    metadata: {},
                },
                Field {
                    name: "rerun.msg_id",
                    data_type: List(
                        Field {
                            name: "item",
                            data_type: Struct([
                                Field { name: "time_ns", data_type: UInt64, is_nullable: false, metadata: {}, },
                                Field { name: "inc", data_type: UInt64, is_nullable: false, metadata: {}, },
                            ]),
                            is_nullable: true,
                            metadata: {},
                        },
                    ),
                    is_nullable: false,
                    metadata: {},
                },
            ]),
            is_nullable: false,
            metadata: {},
        },
    ],
    metadata: {
        "RERUN:entity_path": "logs/seg_demo_log",
    },
}
```

There are several important points to note:
- The entity path is actually passed in the schema metadata.
- This model already allows for batching, aside from the entity path just mentioned.
- We're always sending the complete schemas of our builtin components, even though they are already known to the server by definition.
- The actual instance keys can be omitted, in which case they'll be auto-generated on the server.

### Storage

The data is actually stored in two places:
- in `LogDb`, where every raw `LogMsg` is kept around so that it can later be saved to disk,
    - Due to the lack of batching, the size of the data sitting in `LogDb` is actually completely dwarfed by the size of the schema metadata.
- in the `DataStore`, where the data is stripped down into parts and indexed as needed for our latest-at semantics.
    - That's the origin of the `MsgId` mismatch problem.

In the store, indices are stored as tables on a per-timeline per-entity basis. To facilitate garbage collection _and_ set an upper bound on index sorting costs, these tables are further split into buckets based on both space and time thresholds:
```
IndexTable {
    timeline: frame_nr
    entity: this/that
    size: 3 buckets for a total of 256 B across 8 total rows
    buckets: [
        IndexBucket {
            index time bound: >= #0
            size: 96 B across 2 rows
                - frame_nr: from #41 to #41 (all inclusive)
            data (sorted=true):
            +----------+---------------+--------------+--------------------+
            | frame_nr | rerun.point2d | rerun.rect2d | rerun.instance_key |
            +----------+---------------+--------------+--------------------+
            | 41       | 1             |              | 2                  |
            | 41       |               | 3            | 2                  |
            +----------+---------------+--------------+--------------------+
        }
        IndexBucket {
            index time bound: >= #42
            size: 96 B across 2 rows
                - frame_nr: from #42 to #42 (all inclusive)
            data (sorted=true):
            +----------+---------------+--------------+--------------------+
            | frame_nr | rerun.point2d | rerun.rect2d | rerun.instance_key |
            +----------+---------------+--------------+--------------------+
            | 42       |               | 1            | 2                  |
            | 42       | 2             |              | 2                  |
            +----------+---------------+--------------+--------------------+
        }
        IndexBucket {
            index time bound: >= #43
            size: 64 B across 2 rows
                - frame_nr: from #43 to #44 (all inclusive)
            data (sorted=true):
            +----------+---------------+--------------+--------------------+
            | frame_nr | rerun.point2d | rerun.rect2d | rerun.instance_key |
            +----------+---------------+--------------+--------------------+
            | 43       |               | 4            | 2                  |
            | 44       | 3             |              | 2                  |
            +----------+---------------+--------------+--------------------+
        }
    ]
}
```
Note that, although the tables are bucketed, garbage collection of indices is actually entirely disabled today because the whole GC story is broken (see below).

Components are stored on a per-component basis: i.e. all timelines and all entities share the same component storage.  
Like indices, they are split further into buckets (using both space and time thresholds), once again to facilitate garbage collection:
```
ComponentTable {
    name: rerun.point2d
    size: 2 buckets for a total of 96 B across 4 total rows
    buckets: [
        ComponentBucket {
            size: 64 B across 3 rows
            row range: from 0 to 0 (all inclusive)
            archived: true
            time ranges:
                - log_time: from 19:37:35.713798Z to 19:37:35.713798Z (all inclusive)
                - frame_nr: from #41 to #42 (all inclusive)
            +-------------------------------------------------------------------+
            | rerun.point2d                                                     |
            +-------------------------------------------------------------------+
            | []                                                                |
            | [{x: 2.4033058, y: 8.535466}, {x: 4.051945, y: 7.6194324}         |
            | [{x: 1.4975989, y: 6.17476}, {x: 2.4128711, y: 1.853013}          |
            +-------------------------------------------------------------------+
        }
        ComponentBucket {
            size: 32 B across 1 rows
            row range: from 3 to 3 (all inclusive)
            archived: false
            time ranges:
                - frame_nr: from #44 to #44 (all inclusive)
            +-------------------------------------------------------------------+
            | rerun.point2d                                                     |
            +-------------------------------------------------------------------+
            | [{x: 0.6296742, y: 6.7517242}, {x: 2.3393118, y: 8.770799}        |
            +-------------------------------------------------------------------+
        }
    ]
}
```
(The space thresholds don't actually work today due to the hacks we do in the GC implementation to work around `MsgId` mismatches)

Storing data in both `LogDb` and the component tables can lead to a significant increase in memory usage if not managed carefully, effectively doubling the storage requirements. Therefore, bucket compaction is currently disabled, leaving some performance on the table.

Overall, this storage architecture maps well to our latest-at query semantics, but quite poorly to our range/timeseries semantics (see read path section below).

The index buckets in the `DataStore` hold references to specific rows in the component tables, where the actual data is stored.  
At first, this may seem reasonable, but it's not the most efficient approach: Arrow data is already reference counted, so we're essentially referencing a set of references. This leads to a significant and expensive issue on the read path, particularly for range queries, as discussed below.

### Write path

The write path is fairly straightforward, with some complications arising from having to support timeless data and automatic generation of instance keys (we won't delve into those as they have no impact on batching).

First, each component (i.e., column) is inserted into the currently active component table, which generates a set of globally unique and stable row numbers.

Next, we retrieve or create the appropriate index based on the `EntityPath` and `Timeline` parameters. Using binary search, we locate the correct bucket and insert the row numbers.

Bucket splitting is also part of this process, which can be tricky to handle. However, it is not relevant for batching, so we won't delve into further details.

One additional index that we maintain maps `MsgId`s to timepoints, which is crucial for multi-timeline views like the text view.

### Read path

#### LatestAt (random-access like)

Once again, aside from timeless considerations, latest-at queries are nothing too surprising: it's mostly a matter of grabbing the appropriate index and binsearching for the right bucket.

There are two subtleties though:
1. Finding the right data might involve linearly walking backwards (across all buckets in the worst case).
2. The result of the query is not the data itself, but rather the row numbers at which the data can be found in the component tables.

This second subtlety has important implications. To actually retrieve the data, the caller needs to perform an extra `get` request, which involves a binsearch through the component tables.

#### Range (timeseries like)

While range queries have some surprisingly tricky semantics (especially around the intersection of timeless and temporal data), operationally they behave pretty much like latest-at queries: grabbing the right index, binsearching for the right bucket, and starting iteration from there.

However, the fact that we return row numbers instead of the actual data itself can have significant performance implications when it comes to range queries.  
For example, if you need to iterate through 100k values, you would need to run 100k `get` requests, which would require 100k binsearches in the component tables. This can be extremely costly and is a major reason why our sticky scenes quickly become unusable as the dataset grows.

### Garbage Collection

The current garbage collection mechanism was put together as a quick fix for the `MsgId`-mismatch issue, and it is largely unreliable.

The algorithm works as follows: it finds the oldest component bucket based on the insertion order from the datastore, which doesn't make much semantic sense, and drops it. Then, it drops all component buckets that roughly cover the same time range. Finally, it returns all the `MsgId`s to the viewer so that it can in turn clear its own data structures.  
This process is repeated in a loop until a sufficient amount of data has been dropped.

Beyond these hacks, the logic in and of itself is fundamentally broken right now. Consider the following log calls:
```python
log_color("some/entity", frame_nr=0, [{255, 0, 0, 255}])
log_point("some/entity", frame_nr=1, [{1.0, 1.0}])
log_point("some/entity", frame_nr=2, [{2.0, 2.0}])
log_point("some/entity", frame_nr=3, [{3.0, 3.0}])
log_point("some/entity", frame_nr=4, [{4.0, 4.0}])
log_point("some/entity", frame_nr=5, [{5.0, 5.0}])
```

Querying for `LatestAt("some/entity", ("frame_nr", 5))` will unsurprisingly yield a red point at `(5.0, 5.0)`.

Now, consider what happens after running a GC that drops 50% of the data, leaving us with:
```python
log_point("some/entity", frame_nr=3, [{3.0, 3.0}])
log_point("some/entity", frame_nr=4, [{4.0, 4.0}])
log_point("some/entity", frame_nr=5, [{5.0, 5.0}])
```

Querying for `LatestAt("some/entity", ("frame_nr", 5))` will now yield a point at `(5.0, 5.0)` with whatever is currently defined as the default color, rather than red. This is just plain wrong.

This happens because the GC blindly drops data rather than doing the correct thing: compacting what gets dropped into a latest-at kind of state and keeping that around for future queries.

### Save-to-disk

The current store cannot be dumped to disk, we rely on `LogDb` to store all incoming `LogMsg`s and dump them to disk as-is if the user decides to save the recording.

---

## Proposal

The proposed design involves significant changes at every stage of the data lifecycle.

### Creation

The main difference is of course that the client can now accumulate events (i.e., rows) in a local table before sending them to the server.  
In practice this process of accumulation is handled behind the scenes by the SDK, and driven by both time and space thresholds ("accumulate at most 10MiB of raw data for no more than 50ms").

To reflect the fact that we're passing tables of data around, I suggest we update the terminology.  
The current terms `ComponentBundle` and `MsgBundle` are vague, so let's use more descriptive terms instead such as `DataCell` (== component, a uniform list of values for a given component type), `DataRow` (== event, a list of cells associated with an event ID, entity path, timepoint, and number of instances), and `DataTable` (== batch, a list of rows associated with a batch ID).

Juggling between native and arrow data interchangeably can be a cumbersome task in our current implementation. While we have some helper functions to facilitate this, the process is not as smooth as it could be.  
This is partly due to limitations in `arrow2-convert`, but also because some of our APIs are simply not optimized for this use case (yet).

So, considering all the reasons above, here are all the new types involved.

`DataCell`, which roughly fills the role of our current `ComponentBundle`:
```rust
/// A cell's worth of data, i.e. a uniform list of values for a given component type: `[C]`.
pub struct DataCell {
    /// Name of the component type used in this cell.
    //
    // TODO(cmc): We should consider storing this information within the values array itself, rather than
    // outside of it. Arrow has the concept of extensions specifically for storing type metadata, but
    // we have had some issues with it in the past. This is an opportunity to revisit and improve upon
    // that implementation.
    name: ComponentName,

    /// A uniformly typed list of values for the given component type.
    ///
    /// Includes the data, its schema and probably soon the component metadata (e.g. the `ComponentName`).
    values: Box<dyn arrow2::Array>,
}

impl DataCell {
    /// Builds a new `DataCell` out of a uniform list of native component values.
    pub fn from_native<C: Component>(values: Vec<C>) -> Self { /* ... */ }

    /// Builds a new `DataCell` from an arrow array.
    //
    // TODO(cmc): We shouldn't have to specify the component name separately, this should be part of the
    // metadata by using an extension.
    pub fn from_arrow(name: ComponentName, values: Box<dyn arrow2::Array>) -> Self  { /* ... */ }

    /// Builds an empty `DataCell` from an arrow datatype.
    //
    // TODO(cmc): We shouldn't have to specify the component name separately, this should be part of the
    // metadata by using an extension.
    pub fn from_datatype(name: ComponentName, datatype: DataType) -> Self  { /* ... */ }

    /// Builds an empty `DataCell` from a component type.
    //
    // TODO(cmc): do keep in mind there's a future not too far away where components become a
    // `(component, type)` tuple kinda thing.
    pub fn from_component<C: Component>() -> Self  { /* ... */ }

    /// Returns the contents of the cell as an arrow array.
    pub fn as_arrow(&self) -> Box<dyn arrow2::Array> { /* ... */ }

    /// Returns the contents of the cell as vector of native components.
    //
    // TODO(cmc): We could potentially keep the original native component values if the cell was created
    // using `from_native`.
    pub fn as_components<C: Component>(&self) -> Vec<C> { /* ... */ }
}

// TODO(cmc): Some convenient `From` implementations etc
```
(The "arrow extension" thing that is mentioned a lot in the comments above is [this](https://docs.rs/arrow2/latest/arrow2/datatypes/enum.DataType.html#variant.Extension).)

`DataRow`, which fills the shoes of today's `MsgBundle`:
```rust
/// A row's worth of data, i.e. an event: a list of [`DataCell`]s associated with an auto-generated
/// [`EventId`], a user-specified [`TimePoint`] and [`EntityPath`], and an expected number of
/// instances.
pub struct DataRow {
    /// Auto-generated [`TUID`], uniquely identifying this event and keeping track of the client's
    /// wall-clock.
    event_id: EventId,

    /// User-specified [`TimePoint`] for this event.
    timepoint: TimePoint,

    /// User-specified [`EntityPath`] for this event.
    entity_path: EntityPath,

    /// The expected number of values (== component instances) in each cell.
    ///
    /// Each cell must have either:
    /// - 0 instance (clear),
    /// - 1 instance (splat),
    /// - `num_instances` instances (standard).
    num_instances: u32,

    /// The actual cells (== columns).
    cells: Vec<DataCell>,
}

impl DataRow {
    /// Builds a new `DataRow` out of a list of [`DataCell`]s.
    pub fn from_cells(
        timepoint: TimePoint,
        entity_path: EntityPath,
        num_instances: u32,
        cells: Vec<DataCell>,
    ) -> Self { /* ... */ }

    /// Append a cell to an existing row.
    ///
    /// Returns an error if the cell is not compatible with the row.
    pub fn append_cell(&mut self, cell: DataCell) -> Result<()> { /* ... */ }
}

// TODO(cmc): Some convenient `From` implementations etc
```

And finally `DataTable`, which is where the batching happens:
```rust
/// An entire table's worth of data, i.e. a batch: a list of [`DataRow`]s associated with an auto-generated
/// [`BatchId`].
struct DataTable {
    /// Auto-generated [`TUID`], uniquely identifying this batch of data and keeping track of the
    /// client's wall-clock.
    batch_id: BatchId,

    /// The entire column of [`EventId`]s.
    event_id: Vec<EventId>,

    /// The entire column of [`TimePoint`]s.
    timepoint: Vec<TimePoint>,

    /// The entire column of [`EntityPath`]s.
    entity_path: Vec<EntityPath>,

    /// The entire column of `num_instances`.
    num_instances: Vec<u32>,

    /// All the rows for all the component columns.
    ///
    /// The cells are optional since not all rows will have data for every single component (i.e. the table is sparse).
    rows: HashMap<ComponentName, Vec<Option<DataCell>>>,
}

impl DataTable {
    /// Builds a new `DataTable` out of a list of [`DataRow`]s.
    pub fn from_rows(rows: Vec<DataRow>) -> Self { /* ... */ }

    /// Append a row to an existing table.
    ///
    /// Returns an error if the row is not compatible with the table.
    pub fn append_row(&mut self, row: DataRow) -> Result<()> { /* ... */ }
}

// TODO(cmc): Some convenient `From` implementations etc
```

These datastructures should get rid of all the issues that plague clears, splats and everything that ensue from `MsgId` mismatch issues.

The SDK accumulates cells into rows into tables until either the space or time thresholds are reached, at which point the batch is ready for transport.

### Transport

`ArrowMsg` stays roughly the same in spirit: it's the fully serialized arrow representation of a `DataTable`:
```rust
pub struct ArrowMsg {
    /// Auto-generated [`TUID`], uniquely identifying this batch of data and keeping track of the
    /// client's wall-clock.
    pub batch_id: BatchId,

    /// The schema for the entire table.
    pub schema: arrow2::Schema,

    /// The data for the entire table.
    pub chunk: arrow2::Chunk<Box<dyn Array>>,
}
```

The schema is expected to look like this (-ish):
```rust
Schema {
    fields: [
        Field {
            name: "event_id",
            data_type: List(
                Field {
                    name: "item",
                    data_type: Struct([
                        Field { name: "time_ns", data_type: UInt64, is_nullable: false, metadata: {}, },
                        Field { name: "inc", data_type: UInt64, is_nullable: false, metadata: {}, },
                    ]),
                    is_nullable: true,
                    metadata: {},
                },
            ),
            is_nullable: false,
            metadata: {},
        },
        Field {
            name: "num_instances",
            data_type: List(
                Field {
                    name: "item",
                    data_type: UInt32,
                    is_nullable: false,
                    metadata: {},
                },
            ),
            is_nullable: false,
            metadata: {},
        },
        Field {
            name: "entity_path",
            data_type: List(
                Field {
                    name: "item",
                    data_type: Utf8,
                    is_nullable: false,
                    metadata: {},
                },
            ),
            is_nullable: false,
            metadata: {},
        },
        Field {
            name: "timelines",
            data_type: List(
                Field {
                    name: "item",
                    data_type: Struct([
                        Field { name: "timeline", data_type: Utf8, is_nullable: false, metadata: {}, },
                        Field { name: "type", data_type: UInt8, is_nullable: false, metadata: {}, },
                        Field { name: "time", data_type: Int64, is_nullable: false, metadata: {}, },
                    ]),
                    is_nullable: true,
                    metadata: {},
                },
            ),
            is_nullable: false,
            metadata: {},
        },
        Field {
            name: "components",
            data_type: Struct([
                Field {
                    name: "rerun.text_entry",
                    data_type: List(
                        Field {
                            name: "item",
                            data_type: Struct([
                                Field { name: "body", data_type: Utf8, is_nullable: false, metadata: {}, },
                                Field { name: "level", data_type: Utf8, is_nullable: true, metadata: {}, },
                            ]),
                            is_nullable: true,
                            metadata: {},
                        },
                    ),
                    is_nullable: false,
                    metadata: {},
                },
            ]),
            is_nullable: false,
            metadata: {},
        },
    ],
    metadata: {
        "rerun.batch_id": "<BatchId>", 
    },
}
```

The one major difference here is that `event_id`, `entity_path` and `num_instances` all get dedicated, top-level columns.
This is important as, similar to timelines, they will be handled separately to drive some of the logic in the store.

Lastly, we inject the `BatchId` as metadata.
The `BatchId` isn't used for any logic yet, but comes in very handy for debug purposes.

At this point we might want to sort the batch by `(event_id, entity_path)`, which will greatly improve data locality in the store (see storage section below).

That's also an opportunity to pre-compact the data: if two rows share the same timepoints with different components, we could potentially merge them together... that's a bit more controversial though.

One last thing that needs to be taken care of before actually sending the data is compression / dictionary-encoding of some kind.
Even some trivial gzipping should do wonders here.

### Storage

One of the major change storage-wise is the complete removal of component tables: index tables now reference the arrow data directly.  
With the new design, the arrow buffers now store multiple rows of data. To reference a specific row, each index row points to a slice of fixed unit-length in a shared batch of arrow data.

That is the reason why sorting the batch on the client's end improves performance: it improves data locality in the store by making the shared batches follow the layout of the buckets more closely.

Assuming the following syntax for arrow slices: `ArrowSlice(<buffer_adrr, offset>)`:
```
IndexTable {
    timeline: frame_nr
    entity: this/that
    size: 3 buckets for a total of 256 B across 8 total rows
    buckets: [
        IndexBucket {
            index time bound: >= #0
            size: 96 B across 2 rows
                - frame_nr: from #41 to #41 (all inclusive)
            data (sorted=true):
            +----------+----------+---------------+-------------------+-------------------+------------------------+
            | event_id | frame_nr | num_instances | rerun.point2d     | rerun.rect2d      | rerun.instance_key     |
            +----------+----------+---------------+-------------------+-------------------+------------------------+
            | 1        | 41       | 2             | ArrowSlice(1,33)  |                   | ArrowSlice(0, 0)       |
            | 2        | 41       | 2             |                   | ArrowSlice(1,25)  | ArrowSlice(0, 0)       |
            +----------+----------+---------------+-------------------+-------------------+------------------------+
        }
        IndexBucket {
            index time bound: >= #42
            size: 96 B across 2 rows
                - frame_nr: from #42 to #42 (all inclusive)
            data (sorted=true):
            +----------+----------+---------------+-------------------+-------------------+------------------------+
            | event_id | frame_nr | num_instances | rerun.point2d     | rerun.rect2d      | rerun.instance_key     |
            +----------+----------+---------------+-------------------+-------------------+------------------------+
            | 3        | 42       | 2             |                   | ArrowSlice(2,25)  | ArrowSlice(0, 0)       |
            | 4        | 42       | 2             | ArrowSlice(2,33)  |                   | ArrowSlice(0, 0)       |
            +----------+----------+---------------+-------------------+-------------------+------------------------+
        }
        IndexBucket {
            index time bound: >= #43
            size: 64 B across 2 rows
                - frame_nr: from #43 to #44 (all inclusive)
            data (sorted=true):
            +----------+----------+---------------+-------------------+-------------------+------------------------+
            | event_id | frame_nr | num_instances | rerun.point2d     | rerun.rect2d      | rerun.instance_key     |
            +----------+----------+---------------+-------------------+-------------------+------------------------+
            | 5        | 43       | 2             |                   | ArrowSlice(3,25)  | ArrowSlice(0, 0)       |
            | 6        | 44       | 2             | ArrowSlice(3,33)  |                   | ArrowSlice(0, 0)       |
            +----------+----------+---------------+-------------------+-------------------+------------------------+
        }
    ]
}
```

Worth noticing:
- `event_id` and `num_instances` are deserialized and stored natively, as they play a crucial role in many storage and query features.
- In this example, `rerun.instance_key` consistently references the same slice of arrow data. This is because auto-generated keys are used in this case.

In addition to storing the indices themselves, we also require a bunch of secondary datastructures.

First, we need to keep track of all `EventId`s currently present in the store, in `event_id` order (remember, these are time-based (clients' wall-clocks)!).
This will replace the existing `chronological_msg_ids` in `LogDb` (which is currently in insertion-order-as-seen-from-the-viewer, which isn't too great).  
We need this because some operations like GC and save-to-disk require to pick an arbitrary ordering to get going, and `event_id` is our best bet for now.

Second, we need to map `EventId`s to index rows: `HashMap<EventId, HashSet<(Timeline, EntityPath, BucketNr, RowNr)>>`.

Finally, we need to map `EventId`s to `TimePoint`s: `HashMap<EventId, TimePoint>`.
This is something we already have today and is needed for e.g. text log views.

Overall this is much simpler, and while still not ideal for timeseries-like queries (i.e. range), it should still be way, way more performant.

TODO(cmc): notice how event_id and num_instances are actually stored as native types now!

TODO(cmc):
- native event ID (rebounds / cross-timeline filtering)

### Write path

TODO: that's when the slicing happens

The write path is effectively just a dumbed down version of the current one.

The major difference is we now directly store arrow buffers (which are really arrow slices under the hood) rather than pointers to component tables.
Everything else is the same: get (or create) the appropriate index (`EntityPath` + `Timeline`), find the right bucket using a binsearch, and insert those arrow slices

We also actually deserialize the `event_id` and `num_instances` columns so we can keep track of those natively.

### Read path

The major difference is we now directly return arrow buffers (which are really arrow slices under the hood).

Everything else is the same: grab the right index (`EntityPath` + `Timeline`), binsearch for the right bucket and you're done.

An important difference is we're now returning the expected number of instances as part of the result, which means `re_query` doesn't have to guess anymore and can actually apply clears and splats appropriately.

#### LatestAt (random-access like)

Nothing specific.

#### Range (timeseries like)

Nothing specific.

### Garbage Collection

The garbage collector is the system undergoing the most changes.

We want to garbage collect in `event_id` order (reminder: `EventId` is a `TUID`, i.e. its order is based on the clients's wall-clocks).

- We iterate over all `EventId`s in their natural order
- For every one of them:
    - Find all index rows that match this `event_id` and replace the arrow slice with a tombstone, this has 2 effects:
        1. This decrements the internal refcount of the overall arrow buffer, which might deallocate it if this happens to be the last one standing
        2. This lets the read path knows it should ignore this row (and maybe not look any further?)
    - Check if the bucket now only contains tombstones, and drop it entirely if that's the case
    - Remove the `event_id` from all our secondary datastructures
    - Measure how much memory has been reclaimed (if any!) and decide whether we should continue with the next `event_id` on the list

### Save-to-disk

The store is now in charge of saving to disk, i.e. we do _not_ store raw `LogMsg`s in the main app anymore.

The dumping process is very similar to how the new GC works:
- We iterate over all `EventId`s in their natural order
- For every one of them:
    - Find all index rows that match this `event_id` and:
        1. Merge their timepoints (the rest of the data must be identical!)
        2. Reconstruct a `LogMsg` using the data from the row
    - Return all these `LogMsg`s to the main save-to-disk function

Doing the above results in something functional and technically correct.. but there's a catch: we're losing all the original batching, which means re-loading this .rrd file will have poorer performance than when exploring the original recording.
Not only we do not want to lose the original batching, ideally we would want to improve on it, i.e. batch even more!

We want an extra step in there: accumulate rows of data until we reach a given size, and their craft a single `LogMsg` out of that.
This will make the resulting .rrd file both faster to load (there's some fixed overhead for each `LogMsg`, especially on web...) and faster to explore (cache locality improvements).

## Implementation plan

TODO(cmc): current planning actually lists 1.5 cycles for this

TODO(cmc): This section will basically be turned verbatim into a tracking issue.

TODO(cmc): A lot of things are gonna change, we want too avoid large PRs and early detect newly introduced bugs and performance regressions.

TODO(cmc): this idea is to dedicate a full cycle to this and get as much stuff down as possible

Each step is a PR.

Two things to optimize for:
- Keep reviews small
- Keep the steps well contained and run benchmarks at every step

1. Implement explicit number of instances
1. Fix splats all around (rs sdk, py sdk, re_query...)
1. Pass entity path as a column rather than as metadata (EntityPath doesn't even have an arrow type yet!)
1. Get rid of component buckets altogether
1. Replace `MsgBundle` & `ComponentBundle` with the new types (`DataCell`, `DataRow`, `DataTable`) (no batching yet)
1. Implement batching at the transport layer
1. Sort the batch before sending (`(event_id, entity_path)`)
1. Implement batching within the store
1. Implement new GC
1. Dump directly from the store into an rrd file (no post batch optimization yet)
1. Remove `LogMsg`s from `LogDb`
1. Bring back archiving now that we can

?. Move component name to an extension so that it carries in the metadata instead?
?. Rebatch more aggressively while saving to disk?


TODO(cmc):
- move sanity checks and formatting tools to separate files
    - reading through store.rs should be the easiest way to know all the most important things you need to know... but right now it's just a mess

TODO(cmc): extra pass over this while re-reading everything
TODO(cmc): do we already have some gzipping in?
TODO(cmc): we should probably have a native component type for entitypath??
TODO(cmc): make sure we have all the right tests in place
TODO(cmc): make sure we got all the required benchmarks before starting anything (batched ingestion is one of them)
TODO(cmc): move auto-generated instance keys away from component tables
TODO(cmc): implement accumulation in the SDK without batching

## Future work

Future work that we expect in the mid-term and that we should keep in mind while making changes to the datastore design, so we don't end up completely stuck later on.

(Might or might not be related to batching)

### Dedicated storage for timeseries

While our store is very well designed for latest-at semantics, it's pretty horrible when it comes to range/timeseries-like semantics.
It gets even worse for timeseries of simple scalars.

At some point we're gonna want to have a fully dedicated path for scalar timeseries.

### Recursive clears native to the store

Recursive clears are currently handled in `LogDb`, which is an issue for (at least) two reasons:
- Once we start saving the store in a native format, rather than a collection of `LogMsg`, we'll lose the recursive clears when dumping then reloading the recording!
- The recursive clears aren't even arrow-ified yet: we cannot even dump them with the rest of the store!

### Native file format for writing the store to disk

We currently store recordings as a stream of `LogMsg`s, which is nice for some purposes and awful for others.

While we still want to have the ability to dump the store as a stream of `LogMsg`, we also want 

### Derived components & components converter mappings

We'd like to have components be generic over their datatype at some point, and be able to register 

### no need to pass full schema for known/builtin components

Will now be part of the `(component type, data type)` story

### post-GC latest-at correctness

The current garbage collector actually gets something very wrong, consider the following state:
```
+----------+----------+---------------+-------------------+-------------------+------------------------+
| event_id | frame_nr | num_instances | rerun.point2d     | rerun.rect2d      | rerun.instance_key     |
+----------+----------+---------------+-------------------+-------------------+------------------------+
| 1        | 40       | 2             | ArrowSlice(1,33)  |                   | ArrowSlice(0, 0)       |
| 2        | 41       | 2             |                   | ArrowSlice(1,25)  | ArrowSlice(0, 0)       |
+----------+----------+---------------+-------------------+-------------------+------------------------+
```

A `LatestAt(("frame_nr", 42))` query would yield `[rerun.point2d=ArrowSlice(1,33), rerun.rect2d=ArrowSlice(1,25)]`.

Now let's say we run a GC with `AtLeast(0.30)` ("collect at least 30%"), we end up with the following state:
```
+----------+----------+---------------+-------------------+-------------------+------------------------+
| event_id | frame_nr | num_instances | rerun.point2d     | rerun.rect2d      | rerun.instance_key     |
+----------+----------+---------------+-------------------+-------------------+------------------------+
| 2        | 41       | 2             |                   | ArrowSlice(1,25)  | ArrowSlice(0, 0)       |
+----------+----------+---------------+-------------------+-------------------+------------------------+
```

A `LatestAt(("frame_nr", 42))` query would now yield `[rerun.rect2d=ArrowSlice(1,25)]`, i.e. `rerun.point2d` would now fallback to its default value, rather than whatever value was in `ArrowSlice(1,33)`!

When garbage collecting, we _have to_ keep track of the compacted latest-at state that would have been there otherwise.

### drop-after semantics (undo/redo)

If we choose to retain the UI's undo/redo state in the store, we will require a method to discard all data from a certain point in time and beyond.

I.e. a GC request of the form `DropAfter(("frame_nr", 41))`.

### Write our own arrow2-convert

Might seem unrelated but we do want to keep in mind that we're probably going to write our own struct-to-arrow mapper in the future, and as such shouldn't restrain ourselves based on `arrow2-convert`'s design.

TODO(cmc):
- Linear backwards walk => bitmaps
- Disk based storage (not just save/load)
- Turning the datastore into a server
- Merge rows / pre-compact in the batch
- Referencing external data (e.g. a frame from a video sitting in cloud storage somewhere)
