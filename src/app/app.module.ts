import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // control formularios
import { HttpClientModule } from '@angular/common/http'; // para servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroLandingComponent } from './components/libro-landing/libro-landing.component';
import { LibroBibliotecaComponent } from './components/libro-biblioteca/libro-biblioteca.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AnadirLibroComponent } from './pages/anadir-libro/anadir-libro.component';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilOtrosComponent } from './pages/perfil-otros/perfil-otros.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './pages/landing/swiper.directive';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

register();


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LibroComponent,
    LibroLandingComponent,
    LibroBibliotecaComponent,
    BibliotecaComponent,
    ChatComponent,
    AcercaComponent,
    FavoritosComponent,
    PerfilComponent,
    SobreComponent,
    HomeComponent,
    EditarPerfilComponent,
    LandingComponent,
    AnadirLibroComponent,
    EditarLibroComponent,
    LoginComponent,
    RegistroComponent,
    PerfilOtrosComponent,
    SwiperDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule, // control formularios
    HttpClientModule, // para servicios
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
