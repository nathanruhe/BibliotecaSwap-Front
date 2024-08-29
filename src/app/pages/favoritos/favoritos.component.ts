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

  filteredBooks: Libro[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  filterType: string = 'Todos';

  constructor(public bookService: BookService, public userService: UserService) { 

    this.user = this.userService.user;
    console.log('usuario perfil:', this.user)

    this.books = this.bookService.books;
    console.log('librería del perfil:', this.books)

    // this.applyFilters();

  }

  ngOnInit(): void {
    
    this.bookService.userLikesBooks(this.user.id_user).subscribe((respuesta: Respuesta) => {

      this.books = respuesta.dataBook;
      
    });
  }

   //filtramos libros
  //  applyFilters() {
  //   const filtered = this.books.filter(book => {
  //     let filterCondition = true;
      // if (this.filterType === 'Mis libros prestados') {
      //   filterCondition = !book.status && book.owner === 5; 
      // } else if (this.filterType === 'Libros en prestamo') {
      //   filterCondition = !book.status && book.owner !== 5; 
      // }
      

  //     return filterCondition &&
  //            (book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //             book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //             book.genre.toLowerCase().includes(this.searchTerm.toLowerCase()));
  //   });

  //   this.filteredBooks = filtered.slice(0, this.itemsPerPage * this.currentPage);
  // }

  // loadMore() {
  //   this.currentPage++;
  //   this.applyFilters();
  // }

}