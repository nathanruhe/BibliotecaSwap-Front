import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACION PAGINAS
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilOtrosComponent } from './pages//perfil-otros/perfil-otros.component';

const routes: Routes = [
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil-otros', component: PerfilOtrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
