import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Un BehaviorSubject pour gérer l'état d'authentification. Il est initialisé avec la valeur actuelle du token.
  private authStatus = new BehaviorSubject<boolean>(this.hasToken())
  token: string | null = localStorage.getItem('authToken');
  constructor(private _router: Router) { }

// Méthode privée pour vérifier s'il y a un token dans localStorage.
  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Méthode pour permettre aux composants de s'abonner aux changements de l'état d'authentification.
  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  // Méthode pour obtenir l'état d'authentification actuel.
  isAuth () {
    return this.authStatus.value;
  }

  // Méthode pour se connecter et mettre à jour l'état d'authentification.
  login(token: string) {
    localStorage.setItem('authToken', token);
    this.authStatus.next(true);
  }

  isNotAuth () {
    this._router.navigate(['/login'])
  }
}
