import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
declare function initPlugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(public usuarioService: UsuarioService, public router: Router) {}

  camposIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    initPlugins();

    this.form = new FormGroup(
      {
        nombre: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        passwordConfirm: new FormControl(null, Validators.required),
        condiciones: new FormControl(false)
      },
      { validators: this.camposIguales('password', 'passwordConfirm') }
    );

    this.form.setValue({
      condiciones: true,
      email: 'test2@test.com',
      nombre: 'Test 2',
      password: '123456',
      passwordConfirm: '123456'
    });
  }

  registroUsuario() {
    if (this.form.invalid) {
      return;
    }

    if (!this.form.value.condiciones) {
      swal(
        'Importante',
        'Debes acpetar los términos y condiciones para regsitrarse.',
        'warning'
      );
    }

    const usuario = new Usuario(
      this.form.value.nombre,
      this.form.value.email,
      this.form.value.password
    );

    this.usuarioService.crearUsuario(usuario).subscribe(
      res => this.router.navigate(['/login']),
      err => {
        console.log(err);
      }
    );
  }
}
