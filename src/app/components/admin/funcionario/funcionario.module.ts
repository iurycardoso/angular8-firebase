import { NgModule } from "@angular/core"
import { NgSelectModule } from "@ng-select/ng-select"
import { ComumModule } from "src/app/modules/comum.module"
import { FilterDepartamentoPipe } from "./../../../pipes/filter-departamento.pipe"
import { FuncionarioRoutingModule } from "./funcionario-routing.module"
import { FuncionarioComponent } from "./funcionario.component"

@NgModule({
  declarations: [FuncionarioComponent, FilterDepartamentoPipe],
  imports: [FuncionarioRoutingModule, NgSelectModule, ComumModule]
})
export class FuncionarioModule { }
