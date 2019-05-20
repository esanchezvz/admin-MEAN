import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _DOM,
    // tslint:disable-next-line: variable-name
    public _settings: SettingsService
  ) {}

  ngOnInit() {
    this.setCheckMark();
  }

  toggleTheme(theme: string, link: any) {
    this.applyCheckMark(link);
    this._settings.setTheme(theme);
  }

  applyCheckMark(link: any) {
    const selectores: any = this._DOM.querySelectorAll('.selector');
    selectores.forEach(item => {
      item.classList.remove('working');
    });

    link.classList.add('working');
  }

  setCheckMark() {
    const selectores: any = this._DOM.querySelectorAll('.selector');
    const tema = this._settings.settings.tema;
    selectores.forEach(item => {
      item.classList.remove('working');
      if (tema === item.getAttribute('data-theme')) {
        item.classList.add('working');
      }
    });
  }
}
