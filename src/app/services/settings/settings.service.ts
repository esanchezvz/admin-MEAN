import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css'
  };

  constructor(@Inject(DOCUMENT) private _DOM) {
    this.loadSettings();
  }

  saveSettings(): void {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings(): void {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.setTheme(this.settings.tema);
  }

  setTheme(tema: string): void {
    const url = `assets/css/colors/${tema}.css`;
    this._DOM.getElementById('theme').setAttribute('href', url);

    this.settings.tema = tema;
    this.settings.temaUrl = url;
    this.saveSettings();
  }
}

interface Settings {
  temaUrl: string;
  tema: string;
}
