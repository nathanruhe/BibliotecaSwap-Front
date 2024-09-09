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
  public filteredBooks: any[] = [];
  public showFilters: boolean = true;

  public userId: number;
  public userProvince: string;

  public status: string = 'Todos';
  public selectedGenero: string[] = [];
  public selectedIdioma: string[] = [];
  public searchTerm: string = '';

  public showGeneroDropdown: boolean = false;
  public showIdiomaDropdown: boolean = false;

  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.userId = this.getUserIdFromLocalStorage();
    this.userProvince = this.getUserProvinceFromLocalStorage();

    console.log("El ID del usuario es: ", this.userId);
    console.log("La provincia del usuario es: ", this.userProvince);

    this.loadBooks();
  }

  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }

  getUserProvinceFromLocalStorage(): string {
    return localStorage.getItem('userProvince') || '';
  }

  loadBooks(): void {
    this.bookService.getBooks(this.userProvince).subscribe((response: Respuesta) => {
        console.log("Datos solicitados:", response);

        if (!response.error) {
            this.books = response.dataBook;
            console.log("Todos los libros cargados en pag.Favoritos:", this.books);

            this.books = this.books.filter(book => book.owner !== this.userId);
            console.log("Libros después de filtrar por owner en Favoritos:", this.books);

            this.books.forEach(book => {
                console.log(`Libro: ${book.title}, Provincia en Favoritos: ${book.owner_province !== undefined ? book.owner_province : 'No definida'}`);
            });

            this.books = this.books.filter(book => 
                book.owner_province && 
                book.owner_province.trim().toLowerCase() === this.userProvince.trim().toLowerCase()
            );
            console.log("Libros después de filtrar por provincia en Favoritos:", this.books);

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