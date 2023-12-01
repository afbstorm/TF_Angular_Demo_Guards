import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(this.hasToken())
  token: string | null = localStorage.getItem('authToken');
  constructor(private _router: Router) { }


  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }
  isAuth () {
    return this.authStatus.value;
  }

  login(token: string) {
    localStorage.setItem('authToken', token);
    this.authStatus.next(true);
  }

  isNotAuth () {
    this._router.navigate(['/login'])
  }
}
