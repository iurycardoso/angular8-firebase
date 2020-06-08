import { NgModule } from "@angular/core";
import { NgSelectModule } from "@ng-select/ng-select";
import { ComumModule } from "src/app/modules/comum.module";
import { MovimentacaoComponent } from "./../movimentacao/movimentacao.component";
import { RequisicaoRoutingModule } from "./requisicao-routing.module";
import { RequisicaoComponent } from "./requisicao.component";

@NgModule({
  declarations: [RequisicaoComponent, MovimentacaoComponent],
  imports: [ComumModule, RequisicaoRoutingModule, NgSelectModule],
})
export class RequisicaoModule {}
