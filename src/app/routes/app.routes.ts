import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from '../components/login/login.component';
import { NotFoundComponent } from '../components/shared/not-found/not-found.component';
import { RegisterComponent } from '../components/login/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
