import { CommonModule } from '@angular/Common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PrimeNGModule } from './prime-ng.module'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],

})
export class ComumModule { }
