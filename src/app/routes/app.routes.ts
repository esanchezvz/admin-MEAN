import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

// Componentes

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
