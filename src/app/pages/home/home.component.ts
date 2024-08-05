import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public books: Libro[];
  public users: Usuario[];

  filteredBooks: Libro[] = [];
  showFilters: boolean = false;

  status: string = 'Todos';
  selectedGenero: string[] = [];
  selectedIdioma: string[] = [];
  searchTerm: string = '';

  generos: string[] = ['Policiaca', 'Terror', 'Astrología', 'Poesía', 'Fotografía', 'Idiomas'];
  idiomas: string[] = ['Español', 'Inglés', 'Francés'];

  // Control de visibilidad
  showGeneroDropdown: boolean = false;
  showIdiomaDropdown: boolean = false;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  
  
  constructor() {

  }

  ngOnInit() {
    this.users = [
      new Usuario(1,'Pepito', 'Perez', 'pperez@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',  null, null, null, 'Barcelona', 'mañana', ['Terror'], '1234'), 
      new Usuario(2,'Pepe', 'Garcia', 'pgarcia@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',  null, null, null, 'Barcelona', 'mañana', ['Terror', 'Policiaca'], '1234'),
      new Usuario(3,'Pepin', 'Perea', 'pperea@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',  null, null, null, 'Barcelona', 'tarde', ['Terror', 'Poesía'], '1234'),
      new Usuario(4,'Pepon', 'Pereda', 'ppereda@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',  null, null, null, 'Barcelona', 'mañana', ['Terror', 'Astrología', 'Poesía'], '1234'),
    ];
    
    this.books =[
      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(1), null,  null, null, false, true, 1, 1), 
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(1), null, null, null, false, true,   2, 1),
      new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', this.getUserById(1), null, null, null, true, true,  3, 1),
      new Libro('El Hobbit', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(1), this.getUserById(2), null, null, false, false, 4, 1),
      new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(1), this.getUserById(3), null, null, true, false,  5, 1),
    
    
      new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(2), this.getUserById(1), null, null, false, false, 6, 2),
      new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(2), null, null, null, false, true,  7, 2),
      new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante',this.getUserById(2), null, null, null, true, true,  8, 2),
      new Libro('El resplandor', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(2), null, null, null, false, true, 9, 2),
      new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(2), null, null, null, false, true, 10, 2),
      new Libro('Carrie', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(2), null, null, null, true, true,  11, 2),


      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(3), this.getUserById(1), null, null, false, false, 12, 3),
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Policiaca','https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(3), null, null, null, false, true, 13, 3),
      new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Policiaca',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(3), null, null, null, false, true,14, 3),
      new Libro('El Hobbit', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(3), null, null, null, false, true, 15, 3),
      new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(3), null, null, null, false, true, 16, 3),
      new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(3), null, null, null, false, true, 17, 2),
      new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', this.getUserById(3), null, null, null, false, true, 18, 3),
      new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg','Francés', this.getUserById(3), null, null, null, false, false, 19, 3),
      new Libro('El resplandor', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', this.getUserById(3), null, null, null, false, true, 20, 3),
      new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', this.getUserById(3), null, null, null, false, true, 21, 3),
      new Libro('Carrie', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', this.getUserById(3), null, null, null, false, true, 22, 3),

      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(4), null, null, null, false, true, 23, 4),
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', this.getUserById(4), null, null, null, false, true, 24, 4)
    
    ];
    
    this.applyFilters();
  }

  getUserById(id: number): Usuario {
    return this.users.find(user => user.id_user === id);
  }
  
  //filtramos libros
  addBookToFavorites(book: Libro) {
    book.like = !book.like;
    this.applyFilters();
  }

  // Filtramos libros
  applyFilters() {
    const filtered = this.books.filter(book => {
      return (this.status === 'Todos' || (this.status === 'Disponible' && book.status)) &&
             (this.selectedGenero.length === 0 || this.selectedGenero.includes(book.gender)) &&
             (this.selectedIdioma.length === 0 || this.selectedIdioma.includes(book.idioma)) &&
             (book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              book.gender.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });

    this.filteredBooks = filtered.slice(0, this.itemsPerPage * this.currentPage);
  }
  
  setStatus(status: string) {
    this.status = status;
    this.resetFilters();
  }

  // Control de los dropdowns
  toggleDropdown(dropdown: string) {
    if (dropdown === 'genero') {
      this.showGeneroDropdown = !this.showGeneroDropdown;
    } else if (dropdown === 'idioma') {
      this.showIdiomaDropdown = !this.showIdiomaDropdown;
    }
  }

  // Añadimos o eliminamos según aplicamos filtro
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
  
  //buscador
  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.resetFilters();
  }

  // Cargamos 10 siguientes
  loadMore() {
    this.currentPage++;
    this.applyFilters();
  }
}
