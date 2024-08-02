import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {

  public books: Libro[];
  public users: Usuario[];

  filteredBooks: Libro[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  filterType: string = 'Todos';
  
  
  constructor() {

  }

  ngOnInit() {
    this.books =[
      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", false, true, 25, 5), 
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", false, true,   26, 5),
      new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "",true, true,  27, 5),
      new Libro('El Hobbit', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, false, 28, 1),
      new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, true,  29, 1),
    
      new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, false, 30, 5),
      new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, true,  31, 5),
      new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', "", true, false,  32, 5),
      new Libro('El resplandor', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, true, 33, 5),
      new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, true, 34, 5),
      new Libro('Carrie', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", true, false,  35, 5),

      ]

    this.users = [
      new Usuario(5,'Agamenon', 'Tercero', 'Ade3rd@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Madrid', 'mañana', ['Terror'], '1234'), 
  ];

  this.applyFilters();
  }
 

  //filtramos libros
  applyFilters() {
    const filtered = this.books.filter(book => {
      let filterCondition = true;
      if (this.filterType === 'Mis libros prestados') {
        filterCondition = !book.status && book.id_user === 5; // Cambia '5' por el ID del usuario logueado
      } else if (this.filterType === 'Libros en prestamo') {
        filterCondition = !book.status && book.id_user !== 5; // Cambia '5' por el ID del usuario logueado
      }

      return filterCondition &&
             (book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              book.gender.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });

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
