import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import { SidebarService } from './shared/sidebar.service';
import { SettingsService } from './settings/settings.service';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SidebarService, SettingsService, SharedService]
})
export class ServiceModule {}
