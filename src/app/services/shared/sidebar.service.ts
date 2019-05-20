import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: ' mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Gráficas', url: '/graficas1' },
        { titulo: 'Progress', url: '/progress' },
        { titulo: 'RxJs', url: '/rxjs' },
        { titulo: 'Promesas', url: '/promesas' }
      ]
    }
  ];

  constructor() {}
}
