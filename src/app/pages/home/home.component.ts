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
  filteredBooks: Libro[] = [];
  showFilters: boolean = true;

  userId: number;

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
  
  constructor( private bookService: BookService ) { }

  ngOnInit() {
    this.userId = this.getUserIdFromLocalStorage();  
    console.log("El ID del usuario es: ", this.userId);
    this.loadBooks();
  }

  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe((response: Respuesta) => {
      if (!response.error) {
        this.books = response.dataBook.filter(book => book.owner !== this.userId) as Libro[];
        this.applyFilters();
        console.log(this.books);
      } else {
        console.error('ErrorGetAll:', response.mensaje);
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
  }

  setStatus(status: string) {
    this.status = status;
    this.resetFilters();
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
    this.resetFilters();
  }

  resetFilters() {
    this.currentPage = 1;
    this.applyFilters();
  }

  closeFilters() {
    this.showFilters = false;
    this.showGeneroDropdown = false;
    this.showIdiomaDropdown = false;
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.resetFilters();
  }

  loadMore() {
    this.currentPage++;
    this.applyFilters();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

}
