import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { ImgUploadService } from '../shared/img-upload.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    // tslint:disable-next-line: variable-name
    public _uploadImgService: ImgUploadService
  ) {
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

  actulizarUsuario(user: Usuario) {
    const url = `${URL_SERVICIOS}/usuario/${user._id}?token=${this.token}`;
    return this.http.put(url, user).pipe(
      map((res: any) => {
        // console.log(res);
        this.saveToStorage(res.usuario._id, this.token, res.usuario);
        swal('Usuario Actualizado', res.usuario.nombre, 'success');
        return true;
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

  updateImg(img: File, id: string) {
    this._uploadImgService
      .subirArchivo(img, 'usuarios', id)
      .then((res: any) => {
        this.usuario.img = res.usuario.img;
        swal('Imagen Actualizada', res.usuario.nombre, 'success');
        this.saveToStorage(id, this.token, this.usuario);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
