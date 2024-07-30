/*import { Component } from '@angular/core';
import { Libro, books } from 'src/app/models/libro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books: Libro[] = books;
  filteredBooks: Libro[] = books;
  showFilters: boolean = false;

  applyFilters(filters: any) {
    this.filteredBooks = this.books.filter(book => {
      return (filters.status === 'Todos' || (filters.status === 'Disponible' && book.status) || (filters.status === 'Prestado' && !book.status)) &&
             (filters.localidades.length === 0 || filters.localidades.includes(book.localidad)) &&
             (filters.generos.length === 0 || filters.generos.includes(book.gender)) &&
             (filters.idiomas.length === 0 || filters.idiomas.includes(book.idioma));
    });
  }

  closeFilters() {
    this.showFilters = false;
  }
}*/

import { Component } from '@angular/core';
import { Libro, books } from 'src/app/models/libro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Libro[] = books;
  filteredBooks: Libro[] = books;
  showFilters: boolean = false;

  applyFilters(filters: any) {
    this.filteredBooks = this.books.filter(book => {
      return (filters.status === 'Todos' || (filters.status === 'Disponible' && book.status) || (filters.status === 'Prestado' && !book.status)) &&
             (filters.localidades.length === 0 || filters.localidades.includes(book.localidad)) &&
             (filters.generos.length === 0 || filters.generos.includes(book.gender)) &&
             (filters.idiomas.length === 0 || filters.idiomas.includes(book.idioma));
    });
  }

  closeFilters() {
    this.showFilters = false;
  }
}