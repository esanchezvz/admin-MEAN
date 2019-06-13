import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario.model';
declare function initPlugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recordar = false;
  email: string;
  auth2: any;

  constructor(public router: Router, public usuarioService: UsuarioService) {}

  ngOnInit() {
    initPlugins();
    this.googleInit();
    this.email = localStorage.getItem('user_email') || '';
    this.email.length > 0 ? (this.recordar = true) : (this.recordar = false);
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const user = new Usuario(null, form.value.email, form.value.password);

    this.usuarioService
      .login(user, form.value.recordar)
      .subscribe(
        res => this.router.navigate(['/dashboard']),
        err => console.log(err)
      );
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '656396306353-av5a4ipsvb0gvssvmra4lkn7dhcnt2lh.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn(elem) {
    this.auth2.attachClickHandler(elem, {}, googleUser => {
      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      // console.log(token);
      this.usuarioService
        .googleSignIn(token)
        .subscribe(
          res => (window.location.href = '#/dashboard'),
          err => console.log(err)
        );
    });
  }
}
