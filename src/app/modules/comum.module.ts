import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeNGModule } from "./prime-ng.module";

@NgModule({
  declarations: [],
  imports: [FormsModule, PrimeNGModule, CommonModule],
  exports: [FormsModule, ReactiveFormsModule, PrimeNGModule, CommonModule],
})
export class ComumModule {}
