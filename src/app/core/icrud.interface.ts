import { Observable } from "rxjs";

/**
 * @description A interface	ICrud é	responsável	pelos métodos que as classes deverão efetivar
 * para	acesso aos dados.
 * @author Iury Cardoso
 * @date 2020-02-09
 * @export
 * @interface ICrud
 * @template T
 */
export interface ICrud<T> {

    get(id: string): Observable<T>
    list(): Observable<T[]>
    createOrUpdate(item: T): Promise<T>
    delete(id: string): Promise<void>
    
}