import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from '../components/pages/pages.component';

import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { ProgressComponent } from '../components/pages/progress/progress.component';
import { Graficas1Component } from '../components/pages/graficas1/graficas1.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
