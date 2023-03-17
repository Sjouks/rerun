window.SIDEBAR_ITEMS = {"enum":[["MsgBundleError","The errors that can occur when trying to convert between Arrow and `MessageBundle` types"]],"fn":[["extract_timelines","Extract a [`TimePoint`] from the “timelines” column. This function finds the “timelines” field in `chunk` and deserializes the values into a `TimePoint` using the [`arrow2_convert::deserialize::ArrowDeserialize`] trait."],["try_build_msg_bundle1","Helper to build a `MessageBundle` from 1 component"],["try_build_msg_bundle2","Helper to build a `MessageBundle` from 2 components"],["try_build_msg_bundle3","Helper to build a `MessageBundle` from 3 components"],["wrap_in_listarray","Wrap `field_array` in a single-element `ListArray`"]],"struct":[["ComponentBundle","A [`ComponentBundle`] holds an Arrow component column, and its field name."],["MsgBundle","A `MsgBundle` holds data necessary for composing a single log message."]],"trait":[["Component","A type that can used as a Component of an Entity."],["DeserializableComponent","A [`Component`] that fulfils all the conditions required to be deserialized from an Arrow payload."],["SerializableComponent","A [`Component`] that fulfils all the conditions required to be serialized as an Arrow payload."]],"type":[["Result",""]]};