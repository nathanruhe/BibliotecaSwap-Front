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

  // filteredBooks: Libro[] = [];

  public currentPage: number = 1;
  public itemsPerPage: number = 7;

  constructor(public bookService: BookService, public userService: UserService) { 

    this.user = this.userService.user;
    console.log('usuario perfil:', this.user)

    this.books = this.bookService.books;
    console.log('librería del perfil:', this.books)

  }

  ngOnInit(): void {
    
    this.bookService.userLikesBooks(this.user.id_user).subscribe((respuesta: Respuesta) => {

      this.books = respuesta.dataBook;
      
    });
    // this.loadMore();
  }

  loadMore() {
    // this.currentPage++;

    this.bookService.userLikesBooksMore(this.user.id_user).subscribe((respuesta: Respuesta) => {

      this.books = respuesta.dataBook;
      
    });
  }

}