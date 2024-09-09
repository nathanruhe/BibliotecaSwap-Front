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

  public books: any[] = []; 
  public filteredBooks: Libro[] = [];
  public user: Usuario;

  public userId: number;
  public userProvince: string;
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  //public books: Libro[] = [];
  //public user: Usuario;

  constructor(public bookService: BookService, public userService: UserService) { 

  }

  ngOnInit(): void {
    this.userId = this.getUserIdFromLocalStorage();
    this.userProvince = this.getUserProvinceFromLocalStorage();

    this.user = this.userService.user;
    console.log("El ID del usuario es: ", this.userId);
    console.log("La provincia del usuario es: ", this.userProvince);
    console.log('Pagina favoritos de ', this.user.name);
    this.loadFavoriteBooks();
  }

  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }
  getUserProvinceFromLocalStorage(): string {
    return localStorage.getItem('userProvince') || '';
  }

  loadFavoriteBooks(): void {
    this.bookService.userLikesBooks(this.user.id_user).subscribe((respuesta: Respuesta) => {
        console.log("Respuesta completa de los libros favoritos:", respuesta);
        
        if (!respuesta.error) {
            this.books = respuesta.dataBook;
            console.log("Libros favoritos cargados:", this.books);
  
            // Inspeccionar todos los datos recibidos en el libro
            this.books.forEach(book => {
                console.log("Libro completo:", book);  // Imprime el objeto completo
                console.log(`Propietario: ${book.id_book} `);
                console.log(`id_like: ${book.id_like}`);
                console.log(`id_user: ${book.id_user}`);
                console.log(`owner: ${book.owner}`);  // Verificar si 'owner' está definido
            });
  
            this.applyFilters();
        } else {
            console.error('Error al cargar los libros favoritos:', respuesta.mensaje);
        }
    });
}

  applyFilters(): void {
    this.filteredBooks = this.books.slice(0, this.itemsPerPage * this.currentPage);
  }

  loadMore(): void {
    this.currentPage++;
    this.applyFilters();
  }
}