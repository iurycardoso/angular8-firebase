import { NgModule } from '@angular/core'
import { PainelRoutingModule } from './painel-routing.module'
import { PainelComponent } from './painel.component'



@NgModule({
  declarations: [PainelComponent],
  imports: [
    PainelRoutingModule
  ]
})
export class PainelModule { }
