import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const logGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);

  if (authService.isAuth()) {
    return true;
  }
  authService.isNotAuth()
  return false;

};
