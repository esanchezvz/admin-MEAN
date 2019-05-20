import { Component } from '@angular/core';
import { SettingsService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-MEAN';

  // tslint:disable-next-line: variable-name
  constructor(public _settings: SettingsService) {}
}
