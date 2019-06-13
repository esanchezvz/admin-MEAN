import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { SidebarService } from './shared/sidebar.service';
import { SettingsService } from './settings/settings.service';
import { SharedService } from './shared/shared.service';
import { UsuarioService } from './usuario/usuario.service';
import { ImgUploadService } from './shared/img-upload.service';

// Guards
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    SidebarService,
    SettingsService,
    SharedService,
    UsuarioService,
    LoginComponent,
    ImgUploadService
  ]
})
export class ServiceModule {}
