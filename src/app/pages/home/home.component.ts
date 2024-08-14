import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //public users: Usuario[];

  public books: Libro[] = [];
  filteredBooks: Libro[] = [];
  showFilters: boolean = true;

  status: string = 'Todos';
  selectedGenero: string[] = [];
  selectedIdioma: string[] = [];
  searchTerm: string = '';
  filterBooks: string = '';

  generos: string[] = ['Policiaca', 'Terror', 'Astrología', 'Poesía', 'Fotografía', 'Idiomas'];
  idiomas: string[] = ['Español', 'Inglés', 'Francés'];

  // Control de visibilidad
  showGeneroDropdown: boolean = false;
  showIdiomaDropdown: boolean = false;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  
  constructor( private bookService: BookService ) {

  }

  ngOnInit() {

    this.loadBooks();
    
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe((response: Respuesta) => {
      if (!response.error) {
        this.books = response.dataBook as unknown as Libro[];
        this.filteredBooks = this.books;
        this.applyFilters();
      } else {
        console.error('Error al cargar los libros:', response.mensaje);
      }
    });
  }

  applyFilters(): void {
    this.filteredBooks = this.books.filter(book => {
      const matchesStatus = this.status === 'Todos' || (this.status === 'Disponible' && book.status);
      const matchesGenero = this.selectedGenero.length === 0 || this.selectedGenero.includes(book.gender);
      const matchesIdioma = this.selectedIdioma.length === 0 || this.selectedIdioma.includes(book.idioma);
      const matchesSearch = this.searchTerm === '' || book.title.toLowerCase().includes(this.searchTerm.toLowerCase());

      return matchesStatus && matchesGenero && matchesIdioma && matchesSearch;
    });
  }

  getOneBook(filter: string): void {
    const id_book = Number(filter);
    if (id_book) {
      this.bookService.getOne(id_book).subscribe((response: Respuesta) => {
        if (!response.error) {
          this.filteredBooks = [response.dataBook];
        } else {
          console.error('ErrorGetOne:', response.mensaje);
          this.filteredBooks = [];
        }
      });
    } else {
      this.filteredBooks = this.books;
    }
  }

  /*loadBooks() {
    // Construir los parámetros de consulta
    const params: any = {};
    
    if (this.status !== 'Todos') {
      params.status = this.status;
    }

    if (this.selectedGenero.length > 0) {
      params.genre = this.selectedGenero.join(',');
    }

    if (this.selectedIdioma.length > 0) {
      params.idioma = this.selectedIdioma.join(',');
    }

    if (this.searchTerm) {
      params.search = this.searchTerm;
    }

    // Llamar al servicio para obtener los libros filtrados
    this.bookService.getBooks(params).subscribe(
      (response: any) => {
        const books = response.data || [];
        this.books = books.map(book => ({
          ...book,
          like: book.like || false,
          status: book.status !== undefined ? book.status : true,
        }));
        this.filteredBooks = this.books;
      },
      error => {
        console.error('Error al cargar los libros:', error);
      }
    );
  }*/

  setStatus(status: string) {
    this.status = status;
    this.loadBooks();
  }

  toggleDropdown(dropdown: string) {
    if (dropdown === 'genero') {
      this.showGeneroDropdown = !this.showGeneroDropdown;
    } else if (dropdown === 'idioma') {
      this.showIdiomaDropdown = !this.showIdiomaDropdown;
    }
  }

  toggleSingleSelection(array: string[], item: string) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
    this.loadBooks();  
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.loadBooks();  
  }

  loadMore() {
    this.currentPage++;
    this.loadBooks();  
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  
}
