use eframe::egui;

use log_types::*;

use crate::{LogDb, Preview, ViewerContext};

#[derive(Default, serde::Deserialize, serde::Serialize)]
#[serde(default)]
pub(crate) struct LogTableView {}

impl LogTableView {
    #[allow(clippy::unused_self)]
    pub fn ui(&mut self, log_db: &LogDb, context: &mut ViewerContext, ui: &mut egui::Ui) {
        crate::profile_function!();

        ui.label(format!("{} log lines", log_db.len()));
        ui.separator();

        let mut messages: Vec<&LogMsg> = log_db.messages().collect();
        messages.sort_by_key(|key| (&key.time_point, key.id));

        egui::ScrollArea::horizontal()
            .auto_shrink([false; 2])
            .show(ui, |ui| {
                message_table(log_db, context, ui, &messages);
            });
    }
}

pub(crate) fn message_table(
    log_db: &LogDb,
    context: &mut ViewerContext,
    ui: &mut egui::Ui,
    messages: &[&LogMsg],
) {
    crate::profile_function!();

    use egui_extras::Size;

    egui_extras::TableBuilder::new(ui)
        .striped(true)
        .cell_layout(egui::Layout::left_to_right().with_cross_align(egui::Align::Center))
        .resizable(true)
        .columns(
            Size::initial(200.0).at_least(100.0),
            log_db.time_points.0.len(),
        )
        .column(Size::initial(300.0).at_least(120.0)) // path
        .column(Size::initial(200.0).at_least(100.0)) // space
        .column(Size::remainder().at_least(180.0)) // data
        .header(20.0, |mut header| {
            for time_source in log_db.time_points.0.keys() {
                header.col(|ui| {
                    ui.heading(time_source);
                });
            }
            header.col(|ui| {
                ui.heading("Path");
            });
            header.col(|ui| {
                ui.heading("Space");
            });
            header.col(|ui| {
                ui.heading("Data");
            });
        })
        .body(|body| {
            if true {
                body.heterogeneous_rows(
                    messages.iter().copied().map(row_height),
                    |index, mut row| {
                        let msg = messages[index];
                        table_row(log_db, context, &mut row, msg, row_height(msg));
                    },
                );
            } else {
                const ROW_HEIGHT: f32 = 48.0;
                body.rows(ROW_HEIGHT, messages.len(), |index, mut row| {
                    table_row(log_db, context, &mut row, messages[index], ROW_HEIGHT);
                });
            }
        });
}

fn row_height(msg: &LogMsg) -> f32 {
    if matches!(&msg.data, log_types::Data::Image(_)) {
        48.0
    } else {
        18.0
    }
}

fn table_row(
    log_db: &LogDb,
    context: &mut ViewerContext,
    row: &mut egui_extras::TableRow<'_, '_>,
    msg: &LogMsg,
    row_height: f32,
) {
    let LogMsg {
        id,
        time_point,
        object_path,
        space,
        data,
    } = msg;

    for time_source in log_db.time_points.0.keys() {
        row.col(|ui| {
            if let Some(value) = time_point.0.get(time_source) {
                context.time_button(ui, time_source, *value);
            }
        });
    }
    row.col(|ui| {
        ui.label(format!("{object_path}"));
    });
    row.col(|ui| {
        if let Some(space) = space {
            context.space_button(ui, space);
        }
    });
    row.col(|ui| {
        crate::space_view::ui_data(context, ui, id, data, Preview::Specific(row_height));
    });
}