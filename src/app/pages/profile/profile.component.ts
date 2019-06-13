import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/services.index';
import { Usuario } from 'src/app/models/usuario.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imgUpload: File;
  imgTemp: string;

  // tslint:disable-next-line: variable-name
  constructor(private _userService: UsuarioService) {
    this.usuario = this._userService.usuario;
  }

  ngOnInit() {}

  updateUser(user: Usuario) {
    console.log(user);

    this.usuario.nombre = user.nombre;
    // tslint:disable-next-line: no-unused-expression
    !this.usuario.google ? (this.usuario.email = user.email) : null;

    this._userService
      .actulizarUsuario(this.usuario)
      .subscribe(res => console.log(res), err => console.log(err));
  }

  imgSelect(img: File) {
    if (!img) {
      this.imgUpload = null;
      return;
    }

    if (
      img.type.indexOf('image/png') >= 0 ||
      img.type.indexOf('image/jpg') >= 0 ||
      img.type.indexOf('image/jpeg') >= 0
    ) {
      this.imgUpload = img;
      const reader = new FileReader();
      const urlImgTemp = reader.readAsDataURL(img);
      reader.onloadend = () => (this.imgTemp = reader.result.toString());
    } else {
      swal(
        'Solo Imagenes',
        'El archivo seleccionado no es una imagen permitida',
        'info'
      );
      this.imgUpload = null;
      this.imgTemp = null;
    }
  }

  cambiarImagen() {
    console.log('clicked!');
    this._userService.updateImg(this.imgUpload, this.usuario._id);
  }
}
