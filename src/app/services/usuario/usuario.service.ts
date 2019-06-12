import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    this.loadStorage();
  }

  saveToStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  login(user: Usuario, recordar: boolean) {
    const url = URL_SERVICIOS + '/login';

    recordar
      ? localStorage.setItem('user_email', user.email)
      : localStorage.removeItem('user_email');

    return this.http.post(url, user).pipe(
      map((res: any) => {
        this.saveToStorage(res.id, res.token, res.usuario);
        return { id: res.id, token: res.token };
      })
    );
  }

  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  googleSignIn(token: string) {
    const url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, { token }).pipe(
      map((res: any) => {
        this.saveToStorage(res.id, res.token, res.usuario);
        return { id: res.id, token: res.token };
      })
    );
  }

  crearUsuario(user: Usuario) {
    const url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, user).pipe(
      map((res: any) => {
        swal('Usuario creado', res.usuario.email, 'success');
        return res.usuario;
      })
    );
  }

  isLoggedIn() {
    return this.token !== null ? true : false;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = null;
      this.usuario = null;
    }
  }
}
