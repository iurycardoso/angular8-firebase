import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { ServiceFirebase } from '../core/serevicefirebase.service'
import { Requisicao } from '../models/requisicao.model'


/**
 * @description Aplicaremos a herança da classe base ServiceFirebase usando extends ServiceFirebase<Requisicao>.
 * No método construtor, chamamos o método super(), que recebe a classe modelo Requisicao,
 * o objeto firestore injetada no construtor e o nome que daremos para a coleção.
 * @author Iury Cardoso
 * @date 2020-02-09
 * @export
 * @class RequisicaoService
 * @extends {ServiceFirebase<Requisicao>}
 */
@Injectable({
  providedIn: 'root'
})


export class RequisicaoService extends ServiceFirebase<Requisicao> {

  constructor (firestore: AngularFirestore) {
    super(Requisicao, firestore, 'requisicoes')
  }
}
