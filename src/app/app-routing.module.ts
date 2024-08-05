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
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AcercaComponent } from './pages/acerca/acerca.component';


import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil-otros', component: PerfilOtrosComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'addLibro', component: AnadirLibroComponent },
  { path: 'editLibro', component: EditarLibroComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'miBiblioteca', component: BibliotecaComponent},
  { path: 'chat', component: ChatComponent },
  { path: 'acerca', component: AcercaComponent }
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

