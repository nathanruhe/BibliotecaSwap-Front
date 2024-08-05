import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  @Input() book: Libro;
  @Output() addToFavorites = new EventEmitter<Libro>();
  @Output() goToPage = new EventEmitter<number>();
  
  constructor(private router: Router) {}

  addBookToFavorites() {
    this.book.like = !this.book.like;
    console.log(`libro "${this.book.title}" pasa a : ${this.book.like}`);
    this.addToFavorites.emit(this.book);
  }

  navigateToPage() {
    this.goToPage.emit(this.book.id_book);
  }

  navigateToPerfilOtros() {
    this.router.navigateByUrl("/perfil-otros");
  }
}