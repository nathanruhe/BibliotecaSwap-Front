import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Libro, books } from 'src/app/models/libro';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent  {
  // implements OnInit

  // @Input() book: Libro;
  // @Input() books: Libro[] = [];

  public books: Libro[];
  // public book: Libro;
  book1 = {
    title: 'El barco de Teseo',
    author: 'J.J. Abrams',
    gender: 'Narrativa Fantástica',
    idioma: 'Español',
    photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg'
  };

  book2 = {
    title: 'El Enigma de las Arenas',
    author: 'Robert Erskine Childers',
    gender: 'Novela Contemporánea',
    idioma: 'Español',
    photo: 'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp'
  };

  book3 = {
    title: 'Las Matemáticas de Julio verne',
    author: 'Vicente Meavila',
    gender: 'Divulgación Científica',
    idioma: 'Español',
    photo: 'https://imagessl5.casadellibro.com/a/l/s7/35/9788419414335.webp'
  };

  book4 = {
    title: 'Libro de los Cantos',
    author: 'VV.AA.',
    gender: 'Poesía',
    idioma: 'Español',
    photo: 'https://imagessl9.casadellibro.com/a/l/s7/19/9788420675619.webp'
  };

  book5 = {
    title: 'El guerrero a la Sombra del Cerezo',
    author: 'David D. Gil',
    gender: 'Novela Histórica',
    idioma: 'Español',
    photo: 'https://imagessl5.casadellibro.com/a/l/s7/05/9788491291305.webp'
  };

  book6 = {
    title: 'Determined',
    author: 'Robert Sapolsky',
    gender: 'Literatura Extranjera',
    idioma: 'Inglés',
    photo: 'https://imagessl4.casadellibro.com/a/l/s7/34/9781847925534.webp'
  };

  book7 = {
    title: 'La grieta del Silencio',
    author: 'Javier Castillo',
    gender: 'Novela Negra',
    idioma: 'Español',
    photo: 'https://imagessl0.casadellibro.com/a/l/s7/10/9788491296010.webp'
  };

  book8 = {
    title: 'Las Hermanas De Auschwitz',
    author: 'Roxane Van Iperen',
    gender: 'Novela Histórica',
    idioma: 'Español',
    photo: 'https://imagessl6.casadellibro.com/a/l/s7/36/9788408289036.webp'
  };


  constructor() { 

  // }

  // ngOnInit(): void {

    this.books = [
      new Libro (
        'El barco de Teseo',
        'J.J. Abrams',
        'Narrativa Fantástica',
        'Español',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg',
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
        'Español',
        'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp',
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
        'Español',
        'https://imagessl5.casadellibro.com/a/l/s7/35/9788419414335.webp',
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
        'Español',
        'https://imagessl9.casadellibro.com/a/l/s7/19/9788420675619.webp',
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
        'Español',
        'https://imagessl5.casadellibro.com/a/l/s7/05/9788491291305.webp',
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
        'Inglés',
        'https://imagessl4.casadellibro.com/a/l/s7/34/9781847925534.webp',
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
        'Español',
        'https://imagessl0.casadellibro.com/a/l/s7/10/9788491296010.webp',
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
        'Español',
        'https://imagessl6.casadellibro.com/a/l/s7/36/9788408289036.webp',
        'Almería',
        false,
        true,
        8,
        35
      )]

      // trackByFn (this.book.id_book: number, this.books: Libro): number {
      //   return this.book.id_book;
      // }
  }

  // let books = [this.book1, this.book2, this.book3, this.book4, this.book5, this.book6, this.book7, this.book8];

}