import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { BookService } from 'src/app/shared/book.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public books: Libro[] = [];
  public user: Usuario;

  filteredBooks: Libro[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  filterType: string = 'Todos';

  constructor(public bookService: BookService, public userService: UserService) { 

    // this.books = [
    //   new Libro (
    //     'El barco de Teseo',
    //     'J.J. Abrams',
    //     'Narrativa Fantástica',
    //     'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     true,
    //     1,
    //     35
    //   ),

    //   new Libro (
    //     'El Enigma de las Arenas',
    //     'Robert Erskine Childers',
    //     'Novela Contemporánea',
    //     'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     false,
    //     2,
    //     35
    //   ),

    //   new Libro (
    //     'Las Matemáticas de Julio verne',
    //     'Vicente Meavila',
    //     'Divulgación Científica',
    //     'https://imagessl5.casadellibro.com/a/l/s7/35/9788419414335.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     false,
    //     false,
    //     3,
    //     35
    //   ),

    //   new Libro (
    //     'Libro de los Cantos',
    //     'VV.AA.',
    //     'Poesía',
    //     'https://imagessl9.casadellibro.com/a/l/s7/19/9788420675619.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     false,
    //     4,
    //     35
    //   ),

    //   new Libro (
    //     'El guerrero a la Sombra del Cerezo',
    //     'David D. Gil',
    //     'Novela Histórica',
    //     'https://imagessl5.casadellibro.com/a/l/s7/05/9788491291305.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     true,
    //     5,
    //     35
    //   ),

    //   new Libro (
    //     'Determined',
    //     'Robert Sapolsky',
    //     'Literatura Extranjera',
    //     'https://imagessl4.casadellibro.com/a/l/s7/34/9781847925534.webp',
    //     'Inglés',
    //     null,
    //     null,
    //     null,
    //     false,
    //     true,
    //     6,
    //     35
    //   ),

    //   new Libro (
    //     'La grieta del Silencio',
    //     'Javier Castillo',
    //     'Novela Negra',
    //     'https://imagessl0.casadellibro.com/a/l/s7/10/9788491296010.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     false,
    //     7,
    //     35
    //   ),

    //   new Libro (
    //     'Las Hermanas De Auschwitz',
    //     'Roxane Van Iperen',
    //     'Novela Histórica',
    //     'https://imagessl6.casadellibro.com/a/l/s7/36/9788408289036.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     false,
    //     true,
    //     8,
    //     35
    //   ),
    //   new Libro (
    //     'Roma Soy Yo',
    //     'Santiago Posteguillo',
    //     'Novela Histórica',
    //     'https://imagessl4.casadellibro.com/a/l/s7/54/9788413147154.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     false,
    //     9,
    //     35
    //   ),
    //   new Libro (
    //     'Canción de Hielo y Fuego',
    //     'George R.R.Martin',
    //     'Fantasía',
    //     'https://imagessl3.casadellibro.com/a/l/s7/93/9788466356893.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     true,
    //     10,
    //     35
    //   ),
    //   new Libro (
    //     'El Año de la Langosta',
    //     'Terry Hayes',
    //     'Novela Negra',
    //     'https://imagessl5.casadellibro.com/a/l/s7/45/9788408290445.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     false,
    //     11,
    //     35
    //   ),
    //   new Libro (
    //     'El Reino del Dragón de Oro',
    //     'Isabel Allende',
    //     'Narrativa HispanoAmericana',
    //     'https://imagessl8.casadellibro.com/a/l/s7/08/9788497935708.webp',
    //     'Español',
    //     null,
    //     null,
    //     null,
    //     true,
    //     true,
    //     12,
    //     35
    //   )]

    this.user = this.userService.user;
    console.log('usuario perfil:', this.user)

    this.books = this.bookService.books;
    console.log('librería del perfil:', this.books)

    // this.applyFilters();

  }

  ngOnInit(): void {
    
    this.bookService.userLikesBooks(this.user.id_user).subscribe((respuesta: Respuesta) => {

      this.books = respuesta.dataBook;
      
    });
  }

   //filtramos libros
  //  applyFilters() {
  //   const filtered = this.books.filter(book => {
  //     let filterCondition = true;
      // if (this.filterType === 'Mis libros prestados') {
      //   filterCondition = !book.status && book.owner === 5; 
      // } else if (this.filterType === 'Libros en prestamo') {
      //   filterCondition = !book.status && book.owner !== 5; 
      // }
      

  //     return filterCondition &&
  //            (book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //             book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //             book.genre.toLowerCase().includes(this.searchTerm.toLowerCase()));
  //   });

  //   this.filteredBooks = filtered.slice(0, this.itemsPerPage * this.currentPage);
  // }

  // loadMore() {
  //   this.currentPage++;
  //   this.applyFilters();
  // }

}