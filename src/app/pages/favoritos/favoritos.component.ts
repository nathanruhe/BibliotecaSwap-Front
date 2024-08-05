import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent  {

  public books: Libro[] = [];

  constructor() { 

    this.books = [
      new Libro (
        'El barco de Teseo',
        'J.J. Abrams',
        'Narrativa Fantástica',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg',
        'Español',
        'Almería',
        true,
        true,
        1,
        35
      ),

      new Libro (
        'El Enigma de las Arenas',
        'Robert Erskine Childers',
        'Novela Contemporánea',
        'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp',
        'Español',
        'Almería',
        true,
        false,
        2,
        35
      ),

      new Libro (
        'Las Matemáticas de Julio verne',
        'Vicente Meavila',
        'Divulgación Científica',
        'https://imagessl5.casadellibro.com/a/l/s7/35/9788419414335.webp',
        'Español',
        'Almería',
        false,
        false,
        3,
        35
      ),

      new Libro (
        'Libro de los Cantos',
        'VV.AA.',
        'Poesía',
        'https://imagessl9.casadellibro.com/a/l/s7/19/9788420675619.webp',
        'Español',
        'Almería',
        true,
        false,
        4,
        35
      ),

      new Libro (
        'El guerrero a la Sombra del Cerezo',
        'David D. Gil',
        'Novela Histórica',
        'https://imagessl5.casadellibro.com/a/l/s7/05/9788491291305.webp',
        'Español',
        'Almería',
        true,
        true,
        5,
        35
      ),

      new Libro (
        'Determined',
        'Robert Sapolsky',
        'Literatura Extranjera',
        'https://imagessl4.casadellibro.com/a/l/s7/34/9781847925534.webp',
        'Inglés',
        'Almería',
        false,
        true,
        6,
        35
      ),

      new Libro (
        'La grieta del Silencio',
        'Javier Castillo',
        'Novela Negra',
        'https://imagessl0.casadellibro.com/a/l/s7/10/9788491296010.webp',
        'Español',
        'Almería',
        true,
        false,
        7,
        35
      ),

      new Libro (
        'Las Hermanas De Auschwitz',
        'Roxane Van Iperen',
        'Novela Histórica',
        'https://imagessl6.casadellibro.com/a/l/s7/36/9788408289036.webp',
        'Español',
        'Almería',
        false,
        true,
        8,
        35
      )]

  }

}