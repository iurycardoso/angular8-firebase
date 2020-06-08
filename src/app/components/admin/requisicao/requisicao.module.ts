import { MovimentacaoComponent } from './../movimentacao/movimentacao.component';
import { NgModule } from '@angular/core';
import { ComumModule } from 'src/app/modules/comum.module';

import { RequisicaoRoutingModule } from './requisicao-routing.module';
import { RequisicaoComponent } from './requisicao.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [RequisicaoComponent, MovimentacaoComponent,],
  imports: [
    ComumModule,
    RequisicaoRoutingModule,
    NgSelectModule
  ]
})
export class RequisicaoModule { }
