window.BENCHMARK_DATA = {
  "lastUpdate": 1679064303513,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58cae4ef8d703e32f05fe43875ea38faa0fca3a1",
          "message": "Update `rayon` (#1541)\n\n* cargo update -p rayon\r\n\r\n    Updating crates.io index\r\n    Updating rayon v1.6.0 -> v1.7.0\r\n    Updating rayon-core v1.10.1 -> v1.11.0\r\n\r\n* Don't use jpeg_rayon",
          "timestamp": "2023-03-09T12:27:23+01:00",
          "tree_id": "706a5c95a2f120d4a46b67e952351a7c4e68e635",
          "url": "https://github.com/rerun-io/rerun/commit/58cae4ef8d703e32f05fe43875ea38faa0fca3a1"
        },
        "date": 1678362032969,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557144,
            "range": "± 1786",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1809,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150031,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48103063,
            "range": "± 666263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126375278,
            "range": "± 1190100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152631471,
            "range": "± 916608",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326715184,
            "range": "± 1547360",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180790531,
            "range": "± 772044",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66673318,
            "range": "± 882406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243897107,
            "range": "± 1609801",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332839,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6312,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371544,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 727396,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350006,
            "range": "± 963",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2142,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359278,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6065217669,
            "range": "± 34082787",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1695772,
            "range": "± 7633",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2605813,
            "range": "± 12026",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16873,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42885,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506209,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15d21af9d9c27ace7a2111345b471841937f0dbc",
          "message": "[re_renderer] Outlines via masking & postprocessing (*) (#1532)\n\n* outline example setup\r\n\r\n* new outline mask phase, outline renderer skeleton\r\n\r\n* outline processor setup\r\n\r\n* basic mesh mask drawing\r\n\r\n* outline mask has now its own depth buffer\r\n\r\n* add outline mask to meshinstance, unused so far\r\n\r\n* scaffolding for jumpflooding in outlines\r\n\r\n* potentially working jumpflooding init shader\r\n\r\n* basically working jumpflooding, hardcoded red outlines for the moment\r\n\r\n* wip\r\n\r\n* rebase fixup\r\n\r\n* renames\r\n\r\n* A lot better anti-aliasing handlign and documentation thereof\r\n\r\n* don't render meshes that don't participate in outlines during outline phase\r\n\r\n* configurable mesh outlines. demonstrate internal outlines in example\r\n\r\n* outline configurability, blend both outline a and b\r\n\r\n* Fix crash in write belt\r\n\r\n* use texture sampler for jumpflooding to fix buggy outline point at top left\r\n\r\n* simplify shader a bit by using pixel coordinates all the way\r\nas opposed to texel coordinates\r\n\r\n* use inf() to mark-up invalid positions\r\n\r\n* outline documentation\r\n\r\n* fix thickness/radius confusion\r\n\r\n* cleanup code in outlines.rs\r\n\r\n* fix typos\r\n\r\n* Fix documentation in outlines.rs\r\n\r\n* fix release mode compilation issue\r\n\r\n* Workaround for WebGL shader issue\r\nSee\r\nhttps://github.com/gfx-rs/naga/issues/2252\r\n\r\n* Provide non-msaa version of outline renderer for WebGL compatibility\r\n\r\n* hackish pause/unpause to simplify visualizing everything that goes on in there\r\n\r\n* pr feedback, fix demo timing\r\n\r\n* bump ci?\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-03-09T18:29:35+01:00",
          "tree_id": "eb5033aa7187195136435e94a49fae758739696f",
          "url": "https://github.com/rerun-io/rerun/commit/15d21af9d9c27ace7a2111345b471841937f0dbc"
        },
        "date": 1678383666274,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566556,
            "range": "± 2074",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1813,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 357,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149619,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51781758,
            "range": "± 969302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138572153,
            "range": "± 1660401",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167278114,
            "range": "± 2069391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357409126,
            "range": "± 3282007",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189040007,
            "range": "± 1038365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75300058,
            "range": "± 2063194",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260353313,
            "range": "± 1845927",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 335397,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6241,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371116,
            "range": "± 12662",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 732303,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 358824,
            "range": "± 2352",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2120,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356404,
            "range": "± 1855",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7015828214,
            "range": "± 60439192",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1752509,
            "range": "± 21321",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2622280,
            "range": "± 28191",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16814,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43081,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505661,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd2a542c7dcd4e6c5bec0afe4dec2c74e4e6d321",
          "message": "Add re_arrow_store profile scopes (#1546)",
          "timestamp": "2023-03-09T22:29:08+01:00",
          "tree_id": "0e524d770d5543d5e74b88955c2d1929f995fbc4",
          "url": "https://github.com/rerun-io/rerun/commit/dd2a542c7dcd4e6c5bec0afe4dec2c74e4e6d321"
        },
        "date": 1678398026724,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570651,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1801,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 363,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149518,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47416340,
            "range": "± 734945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125466343,
            "range": "± 6485212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150750510,
            "range": "± 1405395",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325110979,
            "range": "± 2677415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176547565,
            "range": "± 1348562",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63845690,
            "range": "± 777029",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239380655,
            "range": "± 2386117",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328465,
            "range": "± 3781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6110,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 372431,
            "range": "± 2194",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718603,
            "range": "± 43942",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347345,
            "range": "± 1881",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2086,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352211,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6072775620,
            "range": "± 14109546",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1705040,
            "range": "± 18823",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586681,
            "range": "± 19981",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16738,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42837,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 502694,
            "range": "± 8265",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0c418977dc2e47e1ff29683a8e58122c4cbe4fb",
          "message": "Use outlines for mesh selections instead of highlight colors (#1540)\n\n* mesh highlighting is now done via outlines\r\n* eliminate need for computing \"old\" selection highlight on meshes\r\n* blend outlines among each other in linear space",
          "timestamp": "2023-03-09T23:11:57+01:00",
          "tree_id": "67e8d073353b22bbaeebfa1eae98a278922bf4af",
          "url": "https://github.com/rerun-io/rerun/commit/a0c418977dc2e47e1ff29683a8e58122c4cbe4fb"
        },
        "date": 1678400635645,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 544261,
            "range": "± 7746",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1777,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 410,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145353,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44933418,
            "range": "± 1628532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122775580,
            "range": "± 1385766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148283913,
            "range": "± 1577545",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 315642136,
            "range": "± 2493831",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173220112,
            "range": "± 1714685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63035296,
            "range": "± 844766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234241203,
            "range": "± 2478412",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321353,
            "range": "± 5079",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5982,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359440,
            "range": "± 4053",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 696682,
            "range": "± 8564",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341016,
            "range": "± 3062",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2024,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349163,
            "range": "± 3289",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5968647020,
            "range": "± 17782098",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1646371,
            "range": "± 22599",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2573089,
            "range": "± 30807",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16294,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41311,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 486457,
            "range": "± 6856",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baad9be3e00cab32b8322333ef9d19cc466d0ee7",
          "message": "datastore: disable compaction (fixes 2x memory issue) (#1535)\n\n* disable compaction until we support batching\r\n\r\n* link\r\n\r\n* make it configurable",
          "timestamp": "2023-03-09T23:34:13+01:00",
          "tree_id": "01c599d661c4d9b5bbb57d7a3dadc88907c4f0ef",
          "url": "https://github.com/rerun-io/rerun/commit/baad9be3e00cab32b8322333ef9d19cc466d0ee7"
        },
        "date": 1678401908573,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 542755,
            "range": "± 7157",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1813,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 417,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 143993,
            "range": "± 2633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43140743,
            "range": "± 1198148",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122067453,
            "range": "± 1456953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149247724,
            "range": "± 1455404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 317405627,
            "range": "± 2788648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 171066566,
            "range": "± 1615566",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62717435,
            "range": "± 1014836",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 235269855,
            "range": "± 3565675",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 320510,
            "range": "± 4271",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5975,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355048,
            "range": "± 3889",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697693,
            "range": "± 8053",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343191,
            "range": "± 3228",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2025,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347596,
            "range": "± 3611",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6003074553,
            "range": "± 23326006",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1679289,
            "range": "± 25419",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2614748,
            "range": "± 25060",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16198,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41160,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 485638,
            "range": "± 5398",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "416cb36c97d8da2578c71fc573f5f502693753e1",
          "message": "datastore: early exit missing components at table level (#1554)\n\n* early exit at index table level\r\n\r\n* worst-case benchmark",
          "timestamp": "2023-03-10T11:35:42+01:00",
          "tree_id": "b8bca8d772407f4a1ee1fea082fb99085f34ba37",
          "url": "https://github.com/rerun-io/rerun/commit/416cb36c97d8da2578c71fc573f5f502693753e1"
        },
        "date": 1678445216440,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 563043,
            "range": "± 18984",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1833,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 284,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 433,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149017,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46414401,
            "range": "± 1081118",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126000415,
            "range": "± 1021119",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152299265,
            "range": "± 686470",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324682162,
            "range": "± 1646520",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177873830,
            "range": "± 862924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64857605,
            "range": "± 1004808",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241217422,
            "range": "± 1536681",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331133,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6313,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366188,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717465,
            "range": "± 1775",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347324,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2132,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354628,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6088943362,
            "range": "± 26094815",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1742949,
            "range": "± 5452",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2626022,
            "range": "± 9153",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16868,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43554,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505776,
            "range": "± 1950",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2977a5fa172b6c257ab0bd2487e1ac3548f65d74",
          "message": "datastore: track bucket count in store stats & mem panel (#1555)\n\n* track bucket count in store stats\r\n\r\n* keep track of config too",
          "timestamp": "2023-03-10T12:35:35+01:00",
          "tree_id": "2e53643b0d0ab7c26db5dfcf0637d57e318bd239",
          "url": "https://github.com/rerun-io/rerun/commit/2977a5fa172b6c257ab0bd2487e1ac3548f65d74"
        },
        "date": 1678448907813,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570245,
            "range": "± 2018",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1853,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 431,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149865,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44586319,
            "range": "± 1106633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125462521,
            "range": "± 1056426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152573056,
            "range": "± 699404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324536184,
            "range": "± 1578215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177599408,
            "range": "± 837755",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63512761,
            "range": "± 1095669",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 244545303,
            "range": "± 1944702",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331965,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6272,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366736,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 722095,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350168,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2112,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357365,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6144606077,
            "range": "± 10248151",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1730367,
            "range": "± 5307",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2704817,
            "range": "± 22176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16825,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42494,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 508134,
            "range": "± 1346",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbcf0095cc384394d4fb63850382f0e7d973a998",
          "message": "dont split on index bucket size (#1558)",
          "timestamp": "2023-03-10T15:11:56+01:00",
          "tree_id": "998f09b3d22a9e679f6dac5a5c8b7ada8972f265",
          "url": "https://github.com/rerun-io/rerun/commit/fbcf0095cc384394d4fb63850382f0e7d973a998"
        },
        "date": 1678458397407,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564196,
            "range": "± 3391",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1858,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 431,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150874,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 65487073,
            "range": "± 863842",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 173226692,
            "range": "± 2083871",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 208232306,
            "range": "± 2299725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 446657398,
            "range": "± 2849127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216386769,
            "range": "± 1566828",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 104802303,
            "range": "± 1375784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 315038842,
            "range": "± 2401113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 334384,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6291,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 379301,
            "range": "± 3382",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 734920,
            "range": "± 4509",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 361831,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2128,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 362318,
            "range": "± 4466",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 10057759421,
            "range": "± 117538766",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1839928,
            "range": "± 33863",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2725546,
            "range": "± 111980",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16948,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43307,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 507986,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dbc2a12fe9a408ee7615cf8398a11ab42dbc879",
          "message": "Fix combining outline mask for selection & hover (#1552)\n\n* Fix combining outline mask for selection & hover\r\n* Rename `combine` to `with_fallback_to` and fix orderings",
          "timestamp": "2023-03-10T19:28:46+01:00",
          "tree_id": "057110e1ee06df751abc7b63e5061e1b57cc2311",
          "url": "https://github.com/rerun-io/rerun/commit/4dbc2a12fe9a408ee7615cf8398a11ab42dbc879"
        },
        "date": 1678473617130,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573243,
            "range": "± 4992",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1841,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 289,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149846,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49726116,
            "range": "± 931950",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130928868,
            "range": "± 1289090",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157823906,
            "range": "± 964768",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340345147,
            "range": "± 6536630",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182949311,
            "range": "± 983708",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68698118,
            "range": "± 1038974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249971039,
            "range": "± 1454610",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 341096,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6299,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370650,
            "range": "± 1125",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 726231,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348908,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2083,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355501,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6543177068,
            "range": "± 39845980",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1786556,
            "range": "± 17868",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2658024,
            "range": "± 19047",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16855,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42329,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506446,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3813dd124b8766ed30568761ba977750758da8e8",
          "message": "Implement outlines for line renderer & use them for select & hover of \"line-like\" primitives in Viewer (#1553)\n\n* line batches support for outline masks\r\n* Allow outlines for individual line strip ranges\r\n* tweak selection outline style a bit\r\n* change outline depth test for overwritability by same depth value\r\n* rename outline_mask to outline_mask_ids",
          "timestamp": "2023-03-10T20:00:53+01:00",
          "tree_id": "d8b04f74e363bf46a4228b20ab3c5ecf19b9916a",
          "url": "https://github.com/rerun-io/rerun/commit/3813dd124b8766ed30568761ba977750758da8e8"
        },
        "date": 1678475662209,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 551073,
            "range": "± 3244",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1842,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 292,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 444,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148252,
            "range": "± 2018",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46262473,
            "range": "± 1320946",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136482761,
            "range": "± 1522532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164230560,
            "range": "± 1004696",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350475852,
            "range": "± 3089733",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184425548,
            "range": "± 1510726",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73548126,
            "range": "± 1342999",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256776275,
            "range": "± 1923041",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327515,
            "range": "± 2845",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6179,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367982,
            "range": "± 2502",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717546,
            "range": "± 6153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348140,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2051,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352845,
            "range": "± 2129",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7014660696,
            "range": "± 24039123",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1750550,
            "range": "± 14688",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2637840,
            "range": "± 18830",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16782,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41488,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 500231,
            "range": "± 5039",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd5d39141ca92bb910c030a9888e54c8fcc542fa",
          "message": "Outline support for rectangles & use thereof for hover/select in the viewer for images (#1559)",
          "timestamp": "2023-03-10T20:28:11+01:00",
          "tree_id": "07337ccaf19c1cedffb8294c5540e6273a978ef3",
          "url": "https://github.com/rerun-io/rerun/commit/fd5d39141ca92bb910c030a9888e54c8fcc542fa"
        },
        "date": 1678477156260,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565171,
            "range": "± 6341",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1827,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148603,
            "range": "± 1587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44137625,
            "range": "± 1130516",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123837354,
            "range": "± 1240130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152057320,
            "range": "± 991182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 321410881,
            "range": "± 2401484",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173139255,
            "range": "± 1274897",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63698857,
            "range": "± 978645",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 233948901,
            "range": "± 1720292",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328390,
            "range": "± 3067",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6126,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366279,
            "range": "± 3019",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721958,
            "range": "± 6434",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344186,
            "range": "± 2688",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2065,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350246,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6038990508,
            "range": "± 16454856",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1731451,
            "range": "± 19047",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2628225,
            "range": "± 23548",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16658,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42204,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 502909,
            "range": "± 4868",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90f583e60ef44c50fa8774da6f6e7fce0c2edc57",
          "message": "Add missing profiling scopes in re_renderer (#1567)",
          "timestamp": "2023-03-12T20:37:22+01:00",
          "tree_id": "ee9a1a166e4780bc229f5c2b93deaa4ae29d61d5",
          "url": "https://github.com/rerun-io/rerun/commit/90f583e60ef44c50fa8774da6f6e7fce0c2edc57"
        },
        "date": 1678650572398,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552534,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1829,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153436,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49693844,
            "range": "± 1067596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135740691,
            "range": "± 1216667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164144726,
            "range": "± 935636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353332279,
            "range": "± 1567920",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187175579,
            "range": "± 877284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72762833,
            "range": "± 1060684",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256330976,
            "range": "± 1971975",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331425,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6271,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365537,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 714046,
            "range": "± 2532",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349382,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2111,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355057,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6840618970,
            "range": "± 24686392",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1758997,
            "range": "± 9322",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2605055,
            "range": "± 11034",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16927,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42747,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506043,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79af7549999d37263dbf54fe272a5e70d912a245",
          "message": "Introduce a simpler cache dedicated to just decode JPEGs  (#1550)\n\n* New cache for decoded tensors\r\n\r\n* Use the tensor_decode_cache\r\n\r\n* Actually track/purge the decode cache\r\n\r\n* At least log warning if the image can't be decoded\r\n\r\n* Pull in the zero-copy deserialization for ArrowBinary\r\n\r\n* Bump up decode cache to 4G on non-wasm targets",
          "timestamp": "2023-03-13T15:33:00+01:00",
          "tree_id": "900b8fcbf1e46bce17a259ee984b660a8bc3d98e",
          "url": "https://github.com/rerun-io/rerun/commit/79af7549999d37263dbf54fe272a5e70d912a245"
        },
        "date": 1678718672594,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 558707,
            "range": "± 3674",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1851,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 430,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148720,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44586702,
            "range": "± 910411",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124787569,
            "range": "± 1160849",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151979051,
            "range": "± 626032",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325667766,
            "range": "± 1242883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176756481,
            "range": "± 1009934",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63727124,
            "range": "± 819875",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238442946,
            "range": "± 1572409",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330467,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6349,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367540,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718192,
            "range": "± 4568",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351033,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2069,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353948,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6017500893,
            "range": "± 13506697",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1734489,
            "range": "± 18384",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2649847,
            "range": "± 13868",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16883,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42111,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 504835,
            "range": "± 3792",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b2e51a39723e4892bf723d35f65498fb9e3a76d",
          "message": "Link to the Python SDK build instructions in `rerun_py/README.md` (#1565)",
          "timestamp": "2023-03-13T15:50:23+01:00",
          "tree_id": "624649dd6e9d4e7f18bc6ab845e55e8b29312f5d",
          "url": "https://github.com/rerun-io/rerun/commit/4b2e51a39723e4892bf723d35f65498fb9e3a76d"
        },
        "date": 1678719750004,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549349,
            "range": "± 5216",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1833,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 275,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 430,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148263,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44194262,
            "range": "± 1326471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134860560,
            "range": "± 1624773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 159170609,
            "range": "± 1575552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 346095093,
            "range": "± 2902861",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182029425,
            "range": "± 1915438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72303207,
            "range": "± 1267471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252226049,
            "range": "± 2493314",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325164,
            "range": "± 2887",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6200,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360493,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710243,
            "range": "± 4535",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346548,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1996,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350147,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7085119025,
            "range": "± 22729926",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1723641,
            "range": "± 17748",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2561025,
            "range": "± 27607",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16597,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41201,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 496623,
            "range": "± 3373",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b4f76a903438b0e0608eb3f1e28febe7500d46c",
          "message": "Implement outlines for points 2d/3d/depth & use them for select & hover in Viewer (#1568)\n\n* support outline mask ids for point batches\r\n* unify sphere_quad_coverage computation\r\n* single point outlines, in style of line renderer\r\n* outline based selection/hover for 2d points\r\n* Removed a bunch of now unused functions\r\n* implement outlines for depth clouds\r\n* use match & unreachable!() when deciding on render pipelines for a given phase",
          "timestamp": "2023-03-13T16:10:24+01:00",
          "tree_id": "38c3340d038c3b6fad57e7b27c50ad27c71238c0",
          "url": "https://github.com/rerun-io/rerun/commit/4b4f76a903438b0e0608eb3f1e28febe7500d46c"
        },
        "date": 1678720940930,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562959,
            "range": "± 1942",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1870,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150712,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49943776,
            "range": "± 1019565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136959101,
            "range": "± 1307296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162981040,
            "range": "± 1575035",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350729238,
            "range": "± 7978324",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187301200,
            "range": "± 1416312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74424512,
            "range": "± 1146664",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256439555,
            "range": "± 2377718",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331018,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6562,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366666,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717026,
            "range": "± 2767",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346764,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2139,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352874,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7008291089,
            "range": "± 28976635",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1777516,
            "range": "± 9268",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2650868,
            "range": "± 35917",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16893,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42484,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505625,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc7cbafbb6f38a6e7c2ef2697e48d9ba8f1521ac",
          "message": "Remove sensitive data from analytics (#1563)\n\n* Analytics: Anonymize the file path of the location of a panic\r\n* Remove git_branch from analytics",
          "timestamp": "2023-03-13T16:23:52+01:00",
          "tree_id": "dd78e825e2d008754ea16b53383a8a11718d3a62",
          "url": "https://github.com/rerun-io/rerun/commit/bc7cbafbb6f38a6e7c2ef2697e48d9ba8f1521ac"
        },
        "date": 1678721843293,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 579740,
            "range": "± 7602",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1844,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150719,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49805612,
            "range": "± 838100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 129708152,
            "range": "± 2568544",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165734514,
            "range": "± 2108475",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349363067,
            "range": "± 4810169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184119800,
            "range": "± 1545204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68218500,
            "range": "± 828938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249108334,
            "range": "± 2662654",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 334406,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6336,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 377411,
            "range": "± 1588",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 746527,
            "range": "± 22431",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 358976,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2128,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 370009,
            "range": "± 4654",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6644810311,
            "range": "± 124769190",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1872924,
            "range": "± 29224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2875578,
            "range": "± 65334",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16928,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42498,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506865,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec4eb6dc5fd8a43d68d04d490cbc9ebdeab522cc",
          "message": "Analytics: Rename \"location\" to \"file_line\" in the \"crash-panic\" event (#1575)\n\n* Analytics: Rename \"location\" to \"file_line\" in the \"crash-panic\" event\r\n\r\n* debug-assert that we don't use the same name",
          "timestamp": "2023-03-13T17:02:03+01:00",
          "tree_id": "df7356a7d65141192669202da76f6e97085dba19",
          "url": "https://github.com/rerun-io/rerun/commit/ec4eb6dc5fd8a43d68d04d490cbc9ebdeab522cc"
        },
        "date": 1678724031876,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553021,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1851,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 294,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151566,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50523767,
            "range": "± 667107",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136998737,
            "range": "± 1323155",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167005873,
            "range": "± 1011076",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355230733,
            "range": "± 1927888",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187260529,
            "range": "± 1048340",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74102518,
            "range": "± 950017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256823308,
            "range": "± 1720062",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331816,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6285,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367146,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716959,
            "range": "± 2214",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346112,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2090,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351271,
            "range": "± 7536",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6907575239,
            "range": "± 18307363",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1779692,
            "range": "± 27069",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666087,
            "range": "± 37485",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16898,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43160,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505690,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c01134e976e5078a9bc4149a0621bec3d1135ad",
          "message": "Release 0.3.1 merge (#1576)\n\n* Update changelog\r\n\r\n* Bump version to 0.3.1",
          "timestamp": "2023-03-13T17:52:17+01:00",
          "tree_id": "60e929161fb4f8750fccb952c87ef23bb85715e5",
          "url": "https://github.com/rerun-io/rerun/commit/2c01134e976e5078a9bc4149a0621bec3d1135ad"
        },
        "date": 1678727051825,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565371,
            "range": "± 2765",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1861,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 430,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152499,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50895831,
            "range": "± 774265",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136748502,
            "range": "± 1240978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164914040,
            "range": "± 837001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353798524,
            "range": "± 1564417",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189685200,
            "range": "± 1074975",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75338700,
            "range": "± 1038415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259444993,
            "range": "± 1918996",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 336705,
            "range": "± 1145",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6292,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357825,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717616,
            "range": "± 2771",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349998,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2071,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357361,
            "range": "± 1290",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7115211445,
            "range": "± 20134813",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1797428,
            "range": "± 10725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2668652,
            "range": "± 16144",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17031,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42228,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 389082,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a5df62db251ff788276ba8a078e5d4b274d3483",
          "message": "Remove duplicated 'nix' crate (#1479)",
          "timestamp": "2023-03-13T18:36:23+01:00",
          "tree_id": "e4d302a97e2d26ed78359db9495b7aa470e1c252",
          "url": "https://github.com/rerun-io/rerun/commit/7a5df62db251ff788276ba8a078e5d4b274d3483"
        },
        "date": 1678729672089,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 610656,
            "range": "± 1642",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1840,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 287,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154608,
            "range": "± 6812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48902005,
            "range": "± 479258",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130435196,
            "range": "± 961631",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 159545517,
            "range": "± 754462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340397258,
            "range": "± 1146376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180237819,
            "range": "± 766558",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68335950,
            "range": "± 852122",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 246602169,
            "range": "± 1500091",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 336710,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6371,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 401354,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 751706,
            "range": "± 5062",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 384633,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2085,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 384559,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6253628938,
            "range": "± 16229021",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1843082,
            "range": "± 5915",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2879108,
            "range": "± 11664",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16965,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 46255,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 409243,
            "range": "± 804",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc9352da19f5ca7bc2e6f7088fad77b67815d807",
          "message": "Simplify ImageCache and Introduce cache in TextureManager (#1551)\n\n* Simplify ImageCache\r\n* Introduce Cache for textures in the TextureManager\r\n* Remove most usages of dynamic_image\r\n* implement the hover value on the raw tensor rather than dynamic image",
          "timestamp": "2023-03-13T23:41:47+01:00",
          "tree_id": "6fc646aed69f07de292c0ce6a819049c1f7038f1",
          "url": "https://github.com/rerun-io/rerun/commit/bc9352da19f5ca7bc2e6f7088fad77b67815d807"
        },
        "date": 1678748002899,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 604817,
            "range": "± 9094",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1887,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 435,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153257,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45702205,
            "range": "± 1013647",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 128656255,
            "range": "± 1314012",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153489685,
            "range": "± 1153241",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331325519,
            "range": "± 2219060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180196433,
            "range": "± 1517779",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65096810,
            "range": "± 923456",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245210895,
            "range": "± 2162167",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331356,
            "range": "± 2712",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6291,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 401091,
            "range": "± 2915",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 748202,
            "range": "± 12502",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 380019,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2116,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 386657,
            "range": "± 2135",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6315309277,
            "range": "± 14394685",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1823611,
            "range": "± 12409",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2885887,
            "range": "± 21980",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17013,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 45327,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 406000,
            "range": "± 4186",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "beb49b1a6388f6e6da2861d959389a7a2be62ecc",
          "message": "Avoid using undefined extern \"C\" on windows (#1577)",
          "timestamp": "2023-03-14T02:16:38-04:00",
          "tree_id": "40e0c3ed89263848869613f6b914936befd98e91",
          "url": "https://github.com/rerun-io/rerun/commit/beb49b1a6388f6e6da2861d959389a7a2be62ecc"
        },
        "date": 1678775310757,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567127,
            "range": "± 4003",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1834,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 429,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151517,
            "range": "± 1429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49141442,
            "range": "± 1245108",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134995710,
            "range": "± 1561175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163604927,
            "range": "± 1481075",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351269150,
            "range": "± 2272101",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187327480,
            "range": "± 1840438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72493986,
            "range": "± 1168794",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258001176,
            "range": "± 2283119",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323964,
            "range": "± 4290",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6309,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349892,
            "range": "± 3400",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 703678,
            "range": "± 7012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349596,
            "range": "± 3073",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349752,
            "range": "± 2472",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6884632489,
            "range": "± 20106262",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1769409,
            "range": "± 32427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625604,
            "range": "± 30741",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16549,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41403,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 380609,
            "range": "± 6234",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17922076cb11ec5c82355f07867ad0a412ac4cce",
          "message": "New time panel density graph (#1557)\n\n* Refactor: move the data density graph to its own file\r\n\r\n* Cleanup: use TimeRange\r\n\r\n* Refactor: simplify further\r\n\r\n* Replace ball scatterer with density graph\r\n\r\n* Tweak\r\n\r\n* bug fix\r\n\r\n* Small refactor\r\n\r\n* Create time_range_from_x_range helper\r\n\r\n* Allow-list clippy::manual_range_contains\r\n\r\n* objectron-rs fix: only log the base objects once\r\n\r\n* Normalize the density graphs\r\n\r\n* Smooth normalization, and selection color\r\n\r\n* Highlight on hover\r\n\r\n* Better hover effect\r\n\r\n* Better naming: `Item` is called `item`\r\n\r\n* Add a consistent line behind the density graph\r\n\r\n* Remove dead code\r\n\r\n* Integrate re_int_histogram\r\n\r\n* Remove static_assert that trips up rust-analyzer\r\n\r\n* Cleanup\r\n\r\n* Use saturating functions when casting TimeReal -> TimeInt\r\n\r\n* Add some TODO:s\r\n\r\n* Fix wrong x-range\r\n\r\n* Fix typo\r\n\r\n* Fix potential integer overflow\r\n\r\n* Fix a TODO\r\n\r\n* tweaks\r\n\r\n* Tweak colors\r\n\r\n* Add some tests\r\n\r\n* re_int_histogram: make `range` return tight ranges\r\n\r\n* Faster data density graph\r\n\r\n* Switch to the faster re_int_histogram\r\n\r\n* Smoother density graph using box filter\r\n\r\n* Code cleanup\r\n\r\n* Make TimeAxis run in logarithmic time\r\n\r\n* Fix typos\r\n\r\n* Tweak the normalization speed\r\n\r\n* Self-review cleanup\r\n\r\n* Add feathering anti-aliasing to the density graph painter\r\n\r\n* use `mod` instead of comments\r\n\r\n* Remove dead static_assertions\r\n\r\n* typo\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>\r\n\r\n* nits\r\n\r\n* fix docstring link\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-03-14T08:17:11+01:00",
          "tree_id": "5c681b8fe410e5c075bc16f9abb7cd61fa2f16b6",
          "url": "https://github.com/rerun-io/rerun/commit/17922076cb11ec5c82355f07867ad0a412ac4cce"
        },
        "date": 1678778945274,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550683,
            "range": "± 3116",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1859,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 440,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151542,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50303635,
            "range": "± 936482",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136618493,
            "range": "± 1071045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167944922,
            "range": "± 788902",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355510814,
            "range": "± 1545110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187438049,
            "range": "± 1029803",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73438704,
            "range": "± 1034209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259027478,
            "range": "± 2585415",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332638,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6292,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355178,
            "range": "± 3185",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708875,
            "range": "± 3171",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347362,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2110,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354341,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6904330112,
            "range": "± 14106181",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1760917,
            "range": "± 25829",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2672911,
            "range": "± 18939",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16957,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41988,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388422,
            "range": "± 2971",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba131ac6c46cbbb6c765d4102fd6a31ff4bbd917",
          "message": "Fix crsh on decoding old .rrd files (#1579)\n\n* Replace unwrap with logging an error when loading .rrd file\r\n\r\n* Less anyhow",
          "timestamp": "2023-03-14T16:18:31+01:00",
          "tree_id": "f7c66a1da7b87a788d18c24582c9af06d31a346f",
          "url": "https://github.com/rerun-io/rerun/commit/ba131ac6c46cbbb6c765d4102fd6a31ff4bbd917"
        },
        "date": 1678807885971,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561999,
            "range": "± 31262",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1832,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151838,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48476144,
            "range": "± 554883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 128738372,
            "range": "± 1019899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154611712,
            "range": "± 1502070",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329992505,
            "range": "± 2447529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176334821,
            "range": "± 847285",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65905957,
            "range": "± 802450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239902655,
            "range": "± 1524889",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332332,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6538,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371253,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 731713,
            "range": "± 3212",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346768,
            "range": "± 1695",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2175,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 363354,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6099542708,
            "range": "± 37818498",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1762514,
            "range": "± 13452",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2674834,
            "range": "± 20195",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17001,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42053,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 389089,
            "range": "± 6468",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48d86f1380db38e32271240300bcc130b9a2f414",
          "message": "Lint vertical spacing in Rust code (#1572)\n\n* Lint missing vertical spacing in Rust files\r\n\r\n* scripts/lint.py --fix\r\n\r\n* cleanup\r\n\r\n* Put `type` declarations on their own line\r\n\r\n* py-format\r\n\r\n* fix",
          "timestamp": "2023-03-15T10:13:25+01:00",
          "tree_id": "e5e3c90cf8589919699ff779c6e87d2cfac25b34",
          "url": "https://github.com/rerun-io/rerun/commit/48d86f1380db38e32271240300bcc130b9a2f414"
        },
        "date": 1678872301640,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552668,
            "range": "± 17020",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1822,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 281,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 423,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150682,
            "range": "± 1840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44244669,
            "range": "± 1105965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123452496,
            "range": "± 1278978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152866845,
            "range": "± 988612",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323389931,
            "range": "± 2817563",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175711316,
            "range": "± 1175531",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63502416,
            "range": "± 938546",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237055564,
            "range": "± 1973445",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 338114,
            "range": "± 2451",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6339,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365383,
            "range": "± 2231",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 731324,
            "range": "± 5337",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344249,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2137,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352654,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6203127416,
            "range": "± 21658646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1815353,
            "range": "± 15876",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2637052,
            "range": "± 18715",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16915,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 43281,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388846,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51bd75ccf98197b9e0dcf3eae3858c1c9662aa04",
          "message": "Use `log` as our log backend instead of `tracing` (#1590)\n\n* Use log as our log backend instead of tracing\r\n\r\nAnd make sure the web backend use the correct console.debug etc\r\n\r\n* Lower some re_renderer debug logs to trace",
          "timestamp": "2023-03-15T16:00:05+01:00",
          "tree_id": "8dce72464f51e5d40daa94c9f1929c34d0e3f339",
          "url": "https://github.com/rerun-io/rerun/commit/51bd75ccf98197b9e0dcf3eae3858c1c9662aa04"
        },
        "date": 1678893126454,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 545489,
            "range": "± 6848",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1792,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 282,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 429,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146009,
            "range": "± 1912",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45169265,
            "range": "± 1621915",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136978867,
            "range": "± 1646771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161184495,
            "range": "± 1393974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348332023,
            "range": "± 4291123",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183910047,
            "range": "± 1890395",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72775733,
            "range": "± 1679365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250687161,
            "range": "± 2350687",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 313646,
            "range": "± 3750",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6160,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352657,
            "range": "± 3461",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708725,
            "range": "± 8754",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344364,
            "range": "± 2590",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1969,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351139,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7026781500,
            "range": "± 20179326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1775722,
            "range": "± 18401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2636509,
            "range": "± 28407",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16554,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41419,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 492091,
            "range": "± 6243",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38f4fd6ba40864e9571959eacdf17805349ea247",
          "message": "Stop using infinities in wgsl shaders (#1594)\n\n* Stop using infinities in wgsl shaders\r\nThis fixes rendering issues on Windows browsers (likely due to a bug in ANGLE?). However this operation is undefined by spec anyways. Instead we're now using  float min/max instead. Wgsl float constants are now following wgsl spec to the letter.\r\n\r\n* spelling\r\n\r\n* Fix assertion & point-size conversion issues in size.rs",
          "timestamp": "2023-03-15T16:48:07+01:00",
          "tree_id": "d8721cafb9c1f0902ff1cb431d959e5d76a2e5c5",
          "url": "https://github.com/rerun-io/rerun/commit/38f4fd6ba40864e9571959eacdf17805349ea247"
        },
        "date": 1678896000270,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559261,
            "range": "± 1861",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1840,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151520,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48318016,
            "range": "± 494422",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127474339,
            "range": "± 1508294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 159549179,
            "range": "± 1325016",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 337112136,
            "range": "± 1931763",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181004618,
            "range": "± 744958",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65470475,
            "range": "± 794309",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243039709,
            "range": "± 1379454",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323386,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6458,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356799,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706689,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347642,
            "range": "± 1114",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2072,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356898,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6126182762,
            "range": "± 35168800",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1823165,
            "range": "± 16496",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2768566,
            "range": "± 73357",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17005,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42357,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 507025,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "364f86d223ad2ef460ca75690a6cdd7652ed92cf",
          "message": "Turn on allocation tracker at run-time and for web (#1591)\n\n* Fix copy/paste in web viewer\r\n\r\n* Memory tracker callstack: shorten file paths\r\n\r\n* Fix typo\r\n\r\n* clean up copy-pasta comment\r\n\r\n* code refactor\r\n\r\n* allow turning on allocation tracking at runtime from the memory panel\r\n\r\n* nicer formatting in memory panel\r\n\r\n* Notice text layout allocations in the summaries\r\n\r\n* Notice failures to copy the backtrace\r\n\r\n* Notice empty backtraces\r\n\r\n* Fix stacktraces on web\r\n\r\n* wasm_bindgen_check: build to target_wasm\r\n\r\n* Always use target_wasm as build-dir when building wasm32\r\n\r\n* Trim callstacks on web\r\n\r\n* typo fixe\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* Use a checkbox for the detailed allocation tracking\r\n\r\n* Make web callstack even nicer\r\n\r\n* Even nicer callstacks\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-03-16T12:23:11+01:00",
          "tree_id": "e98d4ad52963813972dab014fa8f4d2c8cf70eb0",
          "url": "https://github.com/rerun-io/rerun/commit/364f86d223ad2ef460ca75690a6cdd7652ed92cf"
        },
        "date": 1678966574009,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565626,
            "range": "± 2791",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1815,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152385,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53571375,
            "range": "± 1058657",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141821941,
            "range": "± 1654501",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168643961,
            "range": "± 2034860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 373382705,
            "range": "± 4015002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191288531,
            "range": "± 7707687",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76612590,
            "range": "± 1439086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265899147,
            "range": "± 2557182",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326287,
            "range": "± 3260",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6502,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362765,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712671,
            "range": "± 6012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341372,
            "range": "± 2111",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2090,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 367811,
            "range": "± 21060",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 9256181423,
            "range": "± 120643625",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1847569,
            "range": "± 39588",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2862042,
            "range": "± 314987",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16966,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42618,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506559,
            "range": "± 1221",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "217e783ef05b3b6586c78322ecf66bb7360ae567",
          "message": "CI: Replace wasm_bindgen_check.sh with actually building the web-viewer (#1604)",
          "timestamp": "2023-03-17T10:38:05+01:00",
          "tree_id": "427f5d0d06c79bb430b20a8fed5a2b4fae9ba7a7",
          "url": "https://github.com/rerun-io/rerun/commit/217e783ef05b3b6586c78322ecf66bb7360ae567"
        },
        "date": 1679046615341,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571442,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1897,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152576,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47323466,
            "range": "± 717830",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126745758,
            "range": "± 1029971",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157765071,
            "range": "± 1340455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331379061,
            "range": "± 1235405",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180097694,
            "range": "± 789305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64690497,
            "range": "± 863620",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243367611,
            "range": "± 1314650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323148,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6372,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354200,
            "range": "± 1232",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 714454,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350486,
            "range": "± 2502",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2082,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357303,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6091936932,
            "range": "± 18853298",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1804911,
            "range": "± 9463",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2696428,
            "range": "± 10857",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16966,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42871,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506667,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1790f0dd7b22be79f9ac5ce792defb3dbd0c9bd1",
          "message": "Workaround for alpha to coverage state leaking on (Web)GL renderer (#1596)\n\n* Workaround for alpha to coverage state leaking on (Web)GL renderer\r\nPlus, use `Web` hardware tier when rendering with GLES.\r\n\r\n* Rename HardwareTier::Web to Basic\r\n\r\n* match bool -> if\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-03-17T11:00:52+01:00",
          "tree_id": "de5d81b1b198da8c52a677d434be25e824bbff63",
          "url": "https://github.com/rerun-io/rerun/commit/1790f0dd7b22be79f9ac5ce792defb3dbd0c9bd1"
        },
        "date": 1679047964416,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 556299,
            "range": "± 37639",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1843,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 288,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152372,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48332381,
            "range": "± 2057438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127384757,
            "range": "± 928225",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 158947927,
            "range": "± 1138186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332645976,
            "range": "± 1642748",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179026182,
            "range": "± 871195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64449650,
            "range": "± 740401",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239313697,
            "range": "± 4476831",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322075,
            "range": "± 2815",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6404,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357316,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707810,
            "range": "± 5889",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347742,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2032,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356138,
            "range": "± 5112",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6138659933,
            "range": "± 15981279",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1796190,
            "range": "± 31350",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2701820,
            "range": "± 22486",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16821,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42844,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505267,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ed0f271d86b07a8e740b740ee5ff07e77f54bb4",
          "message": "Use a patched wasm-bindgen-cli with fix for 2GiB bug (#1605)\n\n* Use a patched wasm-bindgen-cli with fix for 2GiB bug\r\n\r\n* Link to our branch\r\n\r\n* Bump wasm-bindgen-cli in the Docker container\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-03-17T15:33:11+01:00",
          "tree_id": "57d32a8b30647cd7e811bda2b7b495a23b54edd0",
          "url": "https://github.com/rerun-io/rerun/commit/9ed0f271d86b07a8e740b740ee5ff07e77f54bb4"
        },
        "date": 1679064301275,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553813,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1850,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 461,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151166,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49108870,
            "range": "± 1325792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138380970,
            "range": "± 1187960",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167031071,
            "range": "± 690931",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354720289,
            "range": "± 1394258",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185478434,
            "range": "± 911490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72175400,
            "range": "± 1143226",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253342661,
            "range": "± 1832284",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326789,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6476,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354280,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 703438,
            "range": "± 2154",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351266,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2134,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356919,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6913118708,
            "range": "± 27594054",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1828751,
            "range": "± 11896",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2720885,
            "range": "± 12386",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16929,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42885,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506582,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}