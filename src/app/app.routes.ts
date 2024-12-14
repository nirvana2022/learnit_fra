import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: 'inicio', title: 'Inicio', component: InicioComponent },
  { path: 'ingreso', title: 'Ingreso', component: LoginComponent },
  { path: 'cursos', title: 'Cursos', component: CursosComponent },
  { path: 'registro', title: 'Registro', component: RegistroComponent},
];
