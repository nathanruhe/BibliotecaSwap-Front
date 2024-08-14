import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';

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

  userId: number;
  likedBooks: number[] = [];

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    this.loadUserLikes();
  }

  loadUserLikes() {
    this.bookService.getUserLikes(this.userId).subscribe(
      (response) => {
        this.likedBooks = response.data.map(like => like.id_book); 
        // Marcamos el libro como likeado si está en la lista de likes
        this.book.like = this.likedBooks.includes(this.book.id_book);
      },
      (error) => {
        console.error('Error al cargar los likes del usuario:', error);
      }
    );
  }

  addBookToFavorites() {
    this.book.like = !this.book.like;

    if (this.book.like) {
      this.bookService.addLike(this.userId, this.book.id_book).subscribe(
        (response) => {
          console.log('Libro añadido a favoritos:', response);
        },
        (error) => {
          console.error('Error al añadir libro a favoritos:', error);
        }
      );
    }

    this.addToFavorites.emit(this.book);
  }

  navigateToPerfilOtros() {
    //this.router.navigateByUrl("/perfil-otros");
    const ownerId = this.book.owner;
    this.router.navigate(['/perfil-otros', ownerId]);
    //se ha modificado tambien app-routing.module.ts
    // { path: 'perfil-otros/:ownerId', component: PerfilOtrosComponent },
    //antes -> { path: 'perfil-otros', component: PerfilOtrosComponent }
  }

  navigateToChat() {
    if (this.book.status) {
      this.bookService.setSelectedBook(this.book);
      this.router.navigate(['/chat']);
    }
  }
}