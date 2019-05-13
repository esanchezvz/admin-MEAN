import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './components/pages/pages.component';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { Graficas1Component } from './components/pages/graficas1/graficas1.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { RegisterComponent } from './components/login/register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
