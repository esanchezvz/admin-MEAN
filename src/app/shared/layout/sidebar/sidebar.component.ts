import { Component, OnInit } from '@angular/core';
import {
  SidebarService,
  UsuarioService
} from 'src/app/services/services.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario: Usuario;
  constructor(
    // tslint:disable-next-line: variable-name
    public _sideBarService: SidebarService,
    // tslint:disable-next-line: variable-name
    public _userService: UsuarioService
  ) {
    this.usuario = this._userService.usuario;
  }

  ngOnInit() {}
}
