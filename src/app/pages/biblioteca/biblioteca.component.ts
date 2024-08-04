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

    this.users = [
      new Usuario(5,'Agamenon', 'Tercero', 'Ade3rd@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',  null, null, null,  'Barcelona', 'mañana', ['Terror'], '1234'), 
      new Usuario(1,'Pepito', 'Perez', 'pperez@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',  null, null, null, 'Barcelona', 'mañana', ['Terror'],  '1234')
    ]; 

    this.books =[
      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(5), null, false, true, 25, 5), 
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), null, false, true,   26, 5),
      new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), null,  true, true,  27, 5),
      new Libro('El Hobbit', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(1), this.getUserById(5),   true, false, 28, 1),
      new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(1), this.getUserById(5),   true, false,  29, 1),
    
      new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), this.getUserById(1),  false, false, 30, 5),
      new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), null,  false, true,  31, 5),
      new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', this.getUserById(5), null,  true, true,  32, 5),
      new Libro('El resplandor', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), null,  false, true, 33, 5),
      new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), null,  false, true, 34, 5),
      new Libro('Carrie', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(5), null,  true, true,  35, 5),
    ];
    
    this.applyFilters();
  }

  getUserById(id: number): Usuario {
    return this.users.find(user => user.id_user === id);
  }
 

  //filtramos libros
  applyFilters() {
    const filtered = this.books.filter(book => {
      let filterCondition = true;
      if (this.filterType === 'Mis libros prestados') {
        filterCondition = !book.status && book.id_user === 5; 
      } else if (this.filterType === 'Libros en prestamo') {
        filterCondition = !book.status && book.id_user !== 5; 
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