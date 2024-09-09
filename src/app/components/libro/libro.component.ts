import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() book: Libro;
  @Input() usuarios: Usuario[] = [];
  @Output() addToFavorites = new EventEmitter<Libro>();
  @Output() goToPage = new EventEmitter<number>();
  @Input() isHome: boolean = false;
  @Input() isFavoritos: boolean = false;
  @Input() isBiblioteca: boolean = false;
  @Input() isOtroUser: boolean = false;
  @Input() filterType: string; 

  userId: number;

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    
  }

  navigateToPerfilOtros() {
    //const ownerId = this.book.owner;
    //this.router.navigate(['/perfil-otros', ownerId]);

    console.log('Navegando al perfil de ownerId:', this.book.owner);
    if (this.book && this.book.owner) {
      this.router.navigate(['/perfil-otros', this.book.owner]);
    } else {
      console.error('Propietario del libro no encontrado.');
    }
    
  }

  addBookToFavorites() {
    this.book.like = !this.book.like; 
    this.addToFavorites.emit(this.book);
  }

  navigateToChat() {
    if (this.book.status) {
      this.bookService.setSelectedBook(this.book);
      this.router.navigate(['/chat']);
    }
  }
}