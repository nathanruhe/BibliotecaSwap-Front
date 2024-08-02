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
    this.books =[
      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", false, true, 1, 1), 
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", false, true,   2, 1),
      new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "",true, true,  3, 1),
      new Libro('El Hobbit', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",false, false, 4, 1),
      new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, true,  5, 1),
    
    
      new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, false, 6, 2),
      new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, true,  7, 2),
      new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', "", true, false,  8, 2),
      new Libro('El resplandor', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, true, 9, 2),
      new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, true, 10, 2),
      new Libro('Carrie', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", true, false,  11, 2),


      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", false, false, 12, 3),
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Policiaca','https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",   false, true, 13, 3),
      new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Policiaca',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",false, true,14, 3),
      new Libro('El Hobbit', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",false, false, 15, 1),
      new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", false, true, 16, 3),
      new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", false, true, 17, 2),
      new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "", false, true, 18, 3),
      new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg','Francés', "", false, false, 19, 3),
      new Libro('El resplandor', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "", false, true, 20, 3),
      new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "", false, true, 21, 3),
      new Libro('Carrie', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", false, true, 22, 3),

      new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",false, false, 23, 4),
      new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",  false, true, 24, 4)
    ]

    this.users = [
      new Usuario(1,'Pepito', 'Perez', 'pperez@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'mañana', ['Terror'], '1234'), 
      new Usuario(2,'Pepe', 'Garcia', 'pgarcia@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'mañana', ['Terror', 'Policiaca'], '1234'),
      new Usuario(3,'Pepin', 'Perea', 'pperea@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'tarde', ['Terror', 'Poesía'], '1234'),
      new Usuario(4,'Pepon', 'Pereda', 'ppereda@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'mañana', ['Terror', 'Astrología', 'Poesía'], '1234'),
  ];

  this.applyFilters();
  }
  
  //filtramos libros
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

  // control de los scrolls
  toggleDropdown(dropdown: string) {
    if (dropdown === 'genero') {
      this.showGeneroDropdown = !this.showGeneroDropdown;
    } else if (dropdown === 'idioma') {
      this.showIdiomaDropdown = !this.showIdiomaDropdown;
    }
  }

  //añadimos o eliminamos segun aplicamos filtro
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

  // cargamos 10 siguientes
  loadMore() {
    this.currentPage++;
    this.applyFilters();
  }
}
