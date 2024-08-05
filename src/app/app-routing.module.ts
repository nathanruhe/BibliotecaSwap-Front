import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACION PAGINAS
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilOtrosComponent } from './pages//perfil-otros/perfil-otros.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';

const routes: Routes = [
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  { path: 'perfil-otros', component: PerfilOtrosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'biblioteca', component: BibliotecaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
