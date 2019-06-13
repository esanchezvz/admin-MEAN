import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/services.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario: Usuario;
  // tslint:disable-next-line: variable-name
  constructor(public _userService: UsuarioService) {
    this.usuario = this._userService.usuario;
  }

  ngOnInit() {
    // console.log(this.usuario);
  }
}
