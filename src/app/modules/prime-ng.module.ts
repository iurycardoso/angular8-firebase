import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/components/button/button";
import { CalendarModule } from "primeng/components/calendar/calendar";
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { DialogModule } from "primeng/components/dialog/dialog";
import { FieldsetModule } from "primeng/components/fieldset/fieldset";
import { InputTextModule } from "primeng/components/inputtext/inputtext";
import { InputTextareaModule } from "primeng/components/inputtextarea/inputtextarea";
import { MessagesModule } from "primeng/components/messages/messages";
import { TabViewModule } from "primeng/components/tabview/tabview";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { ToggleButtonModule } from "primeng/togglebutton";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    CheckboxModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    CalendarModule,
    TabViewModule,
    ToggleButtonModule
  ],
  exports: [
    ButtonModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    CheckboxModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    CalendarModule,
    TabViewModule,
    ToggleButtonModule
  ],
  declarations: []
})
export class PrimeNGModule {}
