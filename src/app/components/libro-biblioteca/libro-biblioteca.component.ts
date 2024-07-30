import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 


@Component({
  selector: 'app-libro-biblioteca',
  templateUrl: './libro-biblioteca.component.html',
  styleUrls: ['./libro-biblioteca.component.css']
})
export class LibroBibliotecaComponent {

  @Input() book: Libro;
  @Output() addToFavorites = new EventEmitter<Libro>();
  @Output() goToPage = new EventEmitter<number>();
  

  addBookToFavorites() {
    this.addToFavorites.emit(this.book);
  }

  navigateToPage() {
    this.goToPage.emit(this.book.id_book);
  }
}