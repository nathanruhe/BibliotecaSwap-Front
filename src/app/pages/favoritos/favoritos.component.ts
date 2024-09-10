import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public books: any[] = [];
  public filteredBooks: any[] = [];
  public likes: any[] = [];
  public likedBookIds: number[] = []; // Para almacenar los IDs de libros que el usuario ha "likeado"
  public userId: number;
  public userProvince: string;

  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.userId = this.getUserIdFromLocalStorage();
    this.userProvince = this.getUserProvinceFromLocalStorage();

    console.log("El ID del usuario es: ", this.userId);
    console.log("La provincia del usuario es: ", this.userProvince);

    this.loadLikes();  // Primero carga los likes
  }

  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }

  getUserProvinceFromLocalStorage(): string {
    return localStorage.getItem('userProvince') || '';
  }

  // Función para obtener los likes del usuario y almacenar los ids"
  loadLikes(): void {
    this.bookService.getAllLikes().subscribe(
      (response) => {
        if (!response.error) {
          this.likes = response.dataLikes;
          console.log("Array completo de Tabla Likes:", this.likes);

          const userLikes = this.likes.filter(like => like.id_user === this.userId);
          this.likedBookIds = userLikes.map(like => like.id_book); 

          console.log("IDs de libros que el usuario ha marcado con 'like':", this.likedBookIds);

          this.loadBooks();
        } else {
          console.error('Error al cargar los likes:', response.message);
        }
      },
      (error) => {
        console.error("Error al obtener los likes:", error);
      }
    );
  }

  loadBooks(): void {
    this.bookService.getBooks(this.userProvince).subscribe((response: Respuesta) => {
      console.log("Datos solicitados:", response);
  
      if (!response.error) {
        this.books = response.dataBook;
        console.log("Todos los libros cargados en Favoritos:", this.books);
  
        
        this.books.forEach(book => {
          book.like = this.likedBookIds.includes(book.id_book); 
        });
  
        
        this.books = this.books.filter(book => this.likedBookIds.includes(book.id_book));
        console.log("Libros que coinciden con los 'likes' del usuario:", this.books);
  
        this.filteredBooks = [];
        this.applyFilters();
  
      } else {
        console.error('Error al cargar los libros:', response.mensaje);
      }
    });
  }

  applyFilters(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const newBooks = this.books.slice(startIndex, endIndex);
    this.filteredBooks = [...this.filteredBooks, ...newBooks];
    console.log("Libros visibles (filtrados):", this.filteredBooks);
  }

  loadMore(): void {
    this.currentPage++;
    this.applyFilters();
  }
}