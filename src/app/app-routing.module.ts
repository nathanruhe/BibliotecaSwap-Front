import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACION PAGINAS
import { RegistroComponent } from './pages/registro/registro.component';
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
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';

const routes: Routes = [
  { path: 'register', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil-otros/:ownerId', component: PerfilOtrosComponent },
  { path: '', component: LandingComponent },
  { path: 'addLibro', component: AnadirLibroComponent },
  { path: 'editLibro/:id_book', component: EditarLibroComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'miBiblioteca', component: BibliotecaComponent},
  { path: 'chat', component: ChatComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

