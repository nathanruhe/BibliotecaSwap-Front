import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //public users: Usuario[];

  public books: Libro[] = [];
  public filteredBooks: Libro[] = [];
  public showFilters: boolean = true;

  public userId: number;
  public userName: string;

  public status: string = 'Todos';
  public selectedGenero: string[] = [];
  public selectedIdioma: string[] = [];
  public searchTerm: string = '';

  public generos: string[] = ['Policiaca', 'Terror', 'Astrología', 'Poesía', 'Fotografía', 'Idiomas'];
  public idiomas: string[] = ['Español', 'Inglés', 'Francés'];

  public showGeneroDropdown: boolean = false;
  public showIdiomaDropdown: boolean = false;

  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  
  constructor( private bookService: BookService ) { }

  ngOnInit() {
    this.userId = this.getUserIdFromLocalStorage();  
    console.log("El ID del usuario es: ", this.userId);

    this.userName = this.getUserNameFromLocalStorage();
    console.log("El nombre del usuario es: ", this.userName);

    this.loadBooks();
  }

  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }

  getUserNameFromLocalStorage(): string {
    return localStorage.getItem('userName') || '';
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe((response: Respuesta) => {
      console.log("Respuesta completa del servidor:", response);

      if (!response.error) {
        this.books = response.dataBook as Libro[];
        console.log("Todos los libros cargados:", this.books);

        this.books = this.books.filter(book => book.owner !== this.userId);
        console.log("Libros después de filtrar por owner:", this.books);

        this.applyFilters();
      } else {
        console.error('Error al cargar los libros:', response.mensaje);
      }
    });
  }

  applyFilters(): void {
    const filtered = this.books.filter(book => {
      const matchesStatus = this.status === 'Todos' || (this.status === 'Disponible' && book.status);
      const matchesGenero = this.selectedGenero.length === 0 || this.selectedGenero.includes(book.genre);
      const matchesIdioma = this.selectedIdioma.length === 0 || this.selectedIdioma.includes(book.language);
      const matchesSearch = this.searchTerm === '' || 
                            book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(this.searchTerm.toLowerCase());
  
      return matchesStatus && matchesGenero && matchesIdioma && matchesSearch;
    });

    this.filteredBooks = filtered.slice(0, this.itemsPerPage * this.currentPage);
    console.log("Libros filtrados:", this.filteredBooks);
  }

  loadMore(): void {
    this.currentPage++;
    this.applyFilters();
  }

  setStatus(status: string): void {
    this.status = status;
    this.resetFilters();
  }

  toggleDropdown(dropdown: string): void {
    if (dropdown === 'genero') {
      this.showGeneroDropdown = !this.showGeneroDropdown;
    } else if (dropdown === 'idioma') {
      this.showIdiomaDropdown = !this.showIdiomaDropdown;
    }
  }

  toggleSingleSelection(array: string[], item: string): void {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
    this.resetFilters();
  }

  resetFilters(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  closeFilters(): void {
    this.showFilters = false;
    this.showGeneroDropdown = false;
    this.showIdiomaDropdown = false;
  }

  onSearch(event: any): void {
    this.searchTerm = event.target.value;
    this.resetFilters();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
