import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { PrimeNGModule } from "./prime-ng.module";

@NgModule({
  declarations: [],
  imports: [FormsModule, PrimeNGModule, CommonModule, NgSelectModule],
  exports: [FormsModule, ReactiveFormsModule, PrimeNGModule, CommonModule],
})
export class ComumModule {}
