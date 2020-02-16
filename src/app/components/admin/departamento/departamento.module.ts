import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { DepartamentoRoutingModule } from './departamento-routing.module'
import { DepartamentoComponent } from './departamento.component'



@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DepartamentoModule { }
