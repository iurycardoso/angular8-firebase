import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { ServiceFirebase } from '../core/serevicefirebase.service'
import { Funcionario } from '../models/funcionario.model'

@Injectable({
  providedIn: 'root'
})

/**
 * @description Aplicaremos a herança da classe base ServiceFirebase usando extends ServiceFirebase<Funcionario>.
 * No método construtor, chamamos o método super(), que recebe a classe modelo Funcionario,
 * o objeto firestore injetada no construtor e o nome que daremos para a coleção.
 * @author Iury Cardoso
 * @date 2020-02-09
 * @export
 * @class FuncionarioService
 * @extends {ServiceFirebase<Funcionario>}
 */
export class FuncionarioService extends ServiceFirebase<Funcionario> {

  constructor (firestore: AngularFirestore) {
    super(Funcionario, firestore, 'funcionarios')
  }
}
