import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from '../pages/pages.component';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { AccountSettingsComponent } from '../pages/account-settings/account-settings.component';
import { PromesasComponent } from '../pages/promesas/promesas.component';
import { RxjsComponent } from '../pages/rxjs/rxjs.component';

// Guards
import { LoginGuard } from '../services/services.index';
import { ProfileComponent } from '../pages/profile/profile.component';

// Components

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'Progreso' }
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'Gráficas' }
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'Promesas' }
      },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Ajustes' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { titulo: 'Perfil' }
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
