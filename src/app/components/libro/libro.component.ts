import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() book: Libro;
  @Output() addToFavorites = new EventEmitter<Libro>();
  @Output() goToPage = new EventEmitter<number>();
  @Input() isHome: boolean = false;
  @Input() isFavoritos: boolean = false;
  @Input() isBiblioteca: boolean = false;
  @Input() isOtroUser: boolean = false;
  @Input() filterType: string; 

  constructor(private router: Router) {}

  ngOnInit() {}

  addBookToFavorites() {
    this.book.like = !this.book.like;
    this.addToFavorites.emit(this.book);
  }

  navigateToPerfilOtros() {
    this.router.navigateByUrl("/perfil-otros");
  }

  navigateToChat() {
    if (this.book.status) {
      this.router.navigate(['/chat']);
    }
  }
}