import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  // tslint:disable-next-line: variable-name
  constructor(public _userService: UsuarioService, public router: Router) {}

  canActivate(): boolean {
    if (this._userService.isLoggedIn()) {
      console.log('Is logged in');
      return true;
    }

    console.log('Not logged in');
    this.router.navigate(['/login']);
    return false;
  }
}
