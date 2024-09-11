import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {

  
  public books: Libro[];
  public users: Usuario[];

  public filteredBooks: Libro[] = [];
  public searchTerm: string = '';
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  public filterType: string = 'Todos';
  public userId: number;

  public likes: any[] = [];
  public likedBookIds: number[] = [];
  
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.userId = this.getUserIdFromLocalStorage();
    console.log("ID de usuario en biblioteca es: ", this.userId);
    this.loadLikes();
    //this.loadUsersAndBooks();
    this.updateExpiredBooks();
  }

  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }

  loadLikes(): void {
    this.bookService.getAllLikes().subscribe(
      (response) => {
        if (!response.error) {
          const likes = response.dataLikes;
          console.log("Array completo de Tabla Likes:", likes);

          const userLikes = likes.filter(like => like.id_user === this.userId);
          this.likedBookIds = userLikes.map(like => like.id_book); 

          console.log("id de libros con like: ", this.likedBookIds);

          this.loadUsersAndBooks();
        } else {
          console.error('Error al cargar los likes:', response.message);
        }
      },
      (error) => {
        console.error("Error al obtener los likes:", error);
      }
    );
  }

  loadUsersAndBooks(): void {
    console.log("User ID utilizado para cargar libros:", this.userId);  
    this.bookService.getBooksUsers(this.userId).subscribe((response: any) => {
      if (!response.error) {
        this.books = response.dataBooksUsers;
        console.log('Libros cargados en biblioteca (después de la asignación):', this.books);
        
        this.books.forEach(book => {
          book.like = this.likedBookIds.includes(book.id_book);
        });
        console.log("Libros conl like: ", this.books);

        
        this.applyFilters(); 
      } else {
        console.error('Error al cargar los libros y usuarios:', response.message);
      }
    }, (error) => {
      console.error('Error en la solicitud HTTP:', error);
    });
  }

  updateExpiredBooks(): void {
    this.bookService.updateExpiredBooks().subscribe((response: any) => {
      if (!response.error) {
        console.log(response.message);
        this.loadUsersAndBooks();
      } else {
        console.error(response.message);
      }
    });
  }

  applyFilters() {
    if (!this.books) {
      console.log('No hay libros para filtrar.');
      return;
    }

    console.log('Aplicando filtros para el tipo:', this.filterType);

    const filtered = this.books.filter(book => {
      let filterCondition = true;

      if (this.filterType === 'Mis libros prestados') {
        console.log("Prestamista " + (book.borrower || 'N/A'));
        filterCondition = !book.status && book.borrower !== this.userId && book.owner === this.userId;
      } else if (this.filterType === 'Todos') {
        console.log('Todos los libros del usuario logueado');
        filterCondition = book.owner === this.userId;
      } else if (this.filterType === 'Libros en prestamo') {
        console.log(book.borrower);
        filterCondition = !book.status && book.borrower === this.userId;
      }

      return filterCondition &&
             (book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              book.genre.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });

    console.log('Libros tras aplicar filtros:', filtered);

    this.filteredBooks = filtered.slice(0, this.itemsPerPage * this.currentPage);
  }

  setFilter(filter: string) {
    this.filterType = filter;
    this.resetFilters();
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.resetFilters();
  }

  resetFilters() {
    this.currentPage = 1;
    this.applyFilters();
  }

  loadMore() {
    this.currentPage++;
    this.applyFilters();
  }

  onDeleteBook(book: Libro) {
    this.books = this.books.filter(b => b.id_book !== book.id_book);
    this.applyFilters();
  }
}