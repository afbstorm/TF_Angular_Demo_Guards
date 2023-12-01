import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor (private _router: Router, private _auth: AuthService) {}

  ngOnInit() {
    // Abonnement au BehaviorSubject pour réagir aux changements d'état d'authentification.
    this._auth.getAuthStatus().subscribe(isAuth => {
      if (isAuth) {
        this._router.navigate(['/dashboard']);
      }
    });
  }

  login(username: string, password: string) {
    if (username === 'test' && password === '1234') {
      // Utilisation la méthode login de AuthService pour mettre à jour l'état d'authentification.
      this._auth.login(this.token);
      this._router.navigate(['/dashboard']);
    }
  }
}
