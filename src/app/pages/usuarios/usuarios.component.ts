import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/services.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  total: number;
  desde: number = 0;
  loading: boolean;

  // tslint:disable-next-line: variable-name
  constructor(public _userService: UsuarioService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this._userService.getUsuarios(this.desde).subscribe(
      res => {
        this.usuarios = res.usuarios;
        this.total = res.total;
        this.loading = false;
      },
      err => console.log(err)
    );
  }

  changePage(val: number) {
    if (this.desde >= 0 && this.desde < this.total) {
      this.desde += +val;
      this.loadUsers();
    }
  }

  buscarUsuario(termino: string) {
    if (termino.length > 0) {
      this.loading = true;
      this._userService.buscarUsuarios(termino).subscribe(
        res => {
          this.usuarios = res;
          console.log(this.usuarios);
          this.loading = false;
          this.loading = false;
        },
        err => console.log(err)
      );
    } else {
      this.desde = 0;
      this.loadUsers();
    }
  }
}
