import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { ServiceFirebase } from '../core/serevicefirebase.service'
import { Departamento } from '../models/departamento.model'

@Injectable({
  providedIn: 'root'
})

/**
 * @description Aplicaremos a herança da classe base ServiceFirebase usando extends ServiceFirebase<Departamento>.
 * No método construtor, chamamos o método super(), que recebe a classe modelo Departamento,
 * o objeto firestore injetada no construtor e o nome que daremos para a coleção.
 * @author Iury Cardoso
 * @date 2020-02-09
 * @export
 * @class DepartamentoService
 * @extends {ServiceFirebase<Departamento>}
 */
export class DepartamentoService extends ServiceFirebase<Departamento> {

  constructor (firestore: AngularFirestore) {
    super(Departamento, firestore, 'departamentos')
  }
}
