import { Component } from '@angular/core';
import { Libro, books } from 'src/app/models/libro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books: Libro[] = books;
  filteredBooks: Libro[] = [];
  showFilters: boolean = false;

  status: string = 'Todos';
  selectedLocalidad: string[] = [];
  selectedGenero: string[] = [];
  selectedIdioma: string[] = [];
  searchTerm: string = '';

  localidades: string[] = ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla", "Huesca", "Teruel", "Zaragoza", "Asturias", "Islas Baleares", "Las Palmas", "Santa Cruz de Tenerife", "Cantabria", "Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora", "Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo", "Barcelona", "Girona", "Lleida", "Tarragona", "Badajoz", "Cáceres", "A Coruña", "Lugo", "Ourense", "Pontevedra", "Madrid", "Murcia", "Navarra", "La Rioja", "Álava", "Gipuzkoa", "Bizkaia", "Ceuta", "Melilla"];
  generos: string[] = ['Policiaca', 'Terror', 'Astrología', 'Poesía', 'Fotografía', 'Idiomas'];
  idiomas: string[] = ['Español', 'Inglés', 'Francés'];

  // Control de visibilidad
  showLocalidadDropdown: boolean = false;
  showGeneroDropdown: boolean = false;
  showIdiomaDropdown: boolean = false;

  currentPage: number = 1;
  itemsPerPage: number = 10;

  // filtro para intro los primeros libros
  constructor() {
    this.applyFilters(); 
  }

  //filtramos libros
  applyFilters() {
    const filtered = this.books.filter(book => {
      return (this.status === 'Todos' || (this.status === 'Disponible' && book.status)) &&
             (this.selectedLocalidad.length === 0 || this.selectedLocalidad.includes(book.localidad)) &&
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
    if (dropdown === 'localidad') {
      this.showLocalidadDropdown = !this.showLocalidadDropdown;
    } else if (dropdown === 'genero') {
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
    this.showLocalidadDropdown = false;
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

