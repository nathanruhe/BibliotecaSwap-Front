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

  public currentPage: number = 1;
  public itemsPerPage: number = 7;

  constructor(public bookService: BookService, public userService: UserService) { 

  }

  ngOnInit(): void {

    this.user = this.userService.user;
    console.log('usuario perfil:', this.user)

    // this.books = this.bookService.books;
    // console.log('librería del perfil:', this.books)
    
    this.bookService.userLikesBooks(this.user.id_user).subscribe((respuesta: Respuesta) => {

      this.books = respuesta.dataBook;
      console.log('librería del perfil:', this.books);
      
    });
    // this.loadMore();
    
  }

  loadMore() {
    // this.currentPage++;
    // let booksPage = this.books;
    // let booksUp;
    this.bookService.userLikesBooksMore(this.user.id_user, this.currentPage).subscribe((respuesta: Respuesta) => {
      
      // this.books = respuesta.dataBook;
      // this.books = this.books.concat(respuesta.dataBook);
      console.log(respuesta.dataBook)
      this.currentPage = respuesta.currentPage;
      this.books = [...this.books, ...respuesta.dataBook];
      
    });

    // this.books = booksPage + booksUp;
  }

}