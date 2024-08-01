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
            //  (filters.localidad.length === 0 || filters.localidad.includes(book.localidad)) &&
             (filters.genero.length === 0 || filters.genero.includes(book.gender)) &&
             (filters.idioma.length === 0 || filters.idioma.includes(book.idioma));
    });
  }

  closeFilters() {
    this.showFilters = false;
  }
}

