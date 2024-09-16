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
  @Input() isLiked: boolean = false;

  userId: number;

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    this.book.like = this.isLiked;
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
    if (this.book.like) {
      this.bookService.removeLike(this.book.id_book, this.userId).subscribe(response => {
        console.log("Libro eliminado de favoritos", response);
        this.book.like = false; 
        this.addToFavorites.emit(this.book); 
      }, error => {
        console.error("Error al eliminar libro de favoritos", error);
      });
    } else {
      this.bookService.addLike(this.book.id_book, this.userId).subscribe(response => {
        console.log("Libro agregado a favoritos", response);
        this.book.like = true; 
        this.addToFavorites.emit(this.book);
      }, error => {
        console.error("Error al agregar libro a favoritos", error);
      });
    }
  }

  /*addBookToFavorites() {
    this.book.like = !this.book.like; 
    this.addToFavorites.emit(this.book);
  }*/

  navigateToChat() {
    if (this.book.status) {
      this.bookService.setSelectedBook(this.book);
      // this.router.navigate(['/chat']);
      const ownerId = this.book.owner;
      this.router.navigate(['/chat', ownerId]);
    }
  }
}