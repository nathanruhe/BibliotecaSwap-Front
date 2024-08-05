import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACION PAGINAS
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AnadirLibroComponent } from './pages/anadir-libro/anadir-libro.component';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilOtrosComponent } from './pages//perfil-otros/perfil-otros.component';

const routes: Routes = [
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil-otros', component: PerfilOtrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
