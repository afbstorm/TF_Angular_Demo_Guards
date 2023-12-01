import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null = localStorage.getItem('authToken');
  constructor(private _router: Router) { }

  isAuth () {
    if (this.token) {
      // Ici rajoute ta vérif de ton back sur la durée de vie du token
      return true
    } else {
      return false
    }
    // Ou return !!this.token
  }

  isNotAuth () {
    this._router.navigate(['/login'])
  }
}
