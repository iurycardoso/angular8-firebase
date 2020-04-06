import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PrimeNGModule } from "./prime-ng.module"

@NgModule({
  declarations: [],
  imports: [FormsModule, PrimeNGModule],
  exports: [FormsModule, ReactiveFormsModule, PrimeNGModule]
})
export class ComumModule { }
