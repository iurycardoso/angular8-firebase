import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { plainToClass } from 'class-transformer'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ICrud } from './icrud.interface'
import { Model } from './model'
/**
 * @description Na assinatura da classe vamos declará-la como abstrata, pois
 * servirá	como base para outras classes do negócio
 * @author Iury Cardoso
 * @date 2020-02-09
 * @export
 * @abstract
 * @class ServiceFirebase
 * @implements {ICrud<T>}
 * @template T
 */
export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {

    ref: AngularFirestoreCollection<T>

    /**
     *Creates an instance of ServiceFirebase.
     * @description No método construtor, atribuímos a
     * referência passando o caminho da coleção.
     * @author Iury Cardoso
     * @date 2020-02-09
     * @param {{new(): T}} type
     * @param {AngularFirestore} firestone
     * @param {string} path
     * @memberof ServiceFirebase
     */

    constructor (
        protected type: { new(): T },
        protected firestone: AngularFirestore,
        public path: string
    ) {
        this.ref = this.firestone.collection<T>(this.path)
    }

    /**
     * @description Recebe um id do tipo string. 
     * Criamos uma variável do tipo AngularDocument para, em seguida, utilizando o
     * operador map, da biblioteca Rxjs, retornar um objeto
     * @author Iury Cardoso
     * @date 2020-02-09
     * @param {string} id
     * @returns {Observable<T>}
     * @memberof ServiceFirebase
     */
    get(id: string): Observable<T> {
        let doc = this.ref.doc<T>(id)
        return doc.get().pipe(map(snapshot => this.docToClass(snapshot)))
    }

    /**
     * @description No método list(), nós utilizamos a referência da coleção ( ref ),
     * invocando o método valueChanges(), que retorna um Observable	de array da classe genérica.
     * @author Iury Cardoso
     * @date 2020-02-09
     * @returns {Observable<T[]>}
     * @memberof ServiceFirebase
     */
    list(): Observable<T[]> {
        return this.ref.valueChanges()
    }

    createOrUpdate(item: T): Promise<any> {
        let id = item.id

        if (!item)
            return
        let obj = null

        if (item instanceof this.type)
            obj = item.toObject()
        else
            obj = item

        /* verificação do id para decidir o fluxo para atualização */
        if (id) {
            return this.ref.doc(id).set(obj)
        }
        /* Ou para inclusão: */
        else
            return this.ref.add(obj).then(res => {
                obj.id = res.id //para salvar com o atributo id
                this.ref.doc(res.id).set(obj)
            })
    }

    delete(id: string): Promise<void> {
        return this.ref.doc(id).delete()
    }


    /**
     * @description Criamos o método docToClass() que utiliza a lib classtransformer, serializando o objeto. 
     * Um map retorna um Observable da classe passada no argumento do tipo.
     * @author Iury Cardoso
     * @date 2020-02-09
     * @param {*} snapshotDoc
     * @returns {T}
     * @memberof ServiceFirebase
     */
    docToClass(snapshotDoc): T {
        let obj = {
            id: snapshotDoc.id,
            ...(snapshotDoc.data() as T)
        }
        let typed = plainToClass(this.type, obj)
        return typed
    }



}