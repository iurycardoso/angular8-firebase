import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User>

  constructor (
    private afAuth: AngularFireAuth
  ) {
    this.user = afAuth.authState
  }

  
  authUser(): Observable<firebase.User> {
    return this.user
  }
  
  /** 
   * O	método	 	signInWithEmailAndPassword()		 recebe	 os	 dois
   * argumentos	e	retorna	uma	Promise	com	as	credenciais	do	usuário
   * @param email 
   * @param password 
   */
  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  /*
   * no	método		logout()		não	passamos	nenhum	argumento	e
   * invocamos	 a	 função	 	signOut()		 do	 	AngularFireAuth		 para
   * desconectar.
   */
  logout(): Promise<void> {
    return this.afAuth.auth.signOut()
  }

  /**
   * Passamos	 um	 email	 no	 parâmetro	 para	 a	 função
	 * sendPasswordResetEmail()	.	Assim	 o	 Firebase	 envia	 um	 email
   * com	um	link	para	redefinição	de	senhas	para	o	email	informado.
   * @param email 
   */
  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
  }
}
