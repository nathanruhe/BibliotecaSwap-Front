import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroLandingComponent } from './components/libro-landing/libro-landing.component';
import { LibroBibliotecaComponent } from './components/libro-biblioteca/libro-biblioteca.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AnadirLibroComponent } from './pages/anadir-libro/anadir-libro.component';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilOtrosComponent } from './pages/perfil-otros/perfil-otros.component';
import { FilterPopupComponent } from './components/filter-popup/filter-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormRegistroComponent,
    FormLoginComponent,
    LibroComponent,
    LibroLandingComponent,
    LibroBibliotecaComponent,
    BibliotecaComponent,
    ChatComponent,
    AcercaComponent,
    FavoritosComponent,
    PerfilComponent,
    SobreComponent,
    SolicitudComponent,
    HomeComponent,
    EditarPerfilComponent,
    LandingComponent,
    AnadirLibroComponent,
    EditarLibroComponent,
    LoginComponent,
    RegistroComponent,
    PerfilOtrosComponent,
    FilterPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
