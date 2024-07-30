import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css']
})
export class FilterPopupComponent {
  @Output() filterChange = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  status: string = 'Todos';
  selectedLocalidad: string[] = [];
  selectedGenero: string[] = [];
  selectedIdioma: string[] = [];

  localidades: string[] = ["Andalucía", "Aragón", "Asturias", "Islas Baleares", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Extremadura", "Galicia", "Madrid", "Murcia", "Navarra", "La Rioja", "País Vasco", "Valencia", "Ceuta", "Melilla"];
  generos: string[] = ['Aventuras', 'Terror', 'Ciencia ficción'];
  idiomas: string[] = ['Español', 'Inglés', 'Francés'];

  showLocalidad: boolean = false;
  showGenero: boolean = false;
  showIdioma: boolean = false;

  setStatus(status: string) {
    this.status = status;
    this.applyFilters();
  }

  toggleDropdown(dropdown: string) {
    if (dropdown === 'localidad') {
      this.showLocalidad = !this.showLocalidad;
    }
  }

  toggleSingleSelection(array: string[], item: string) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filterChange.emit({
      status: this.status,
      localidad: this.selectedLocalidad,
      genero: this.selectedGenero,
      idioma: this.selectedIdioma
    });
  }

  resetFilters() {
    this.status = 'Todos';
    this.selectedLocalidad = [];
    this.selectedGenero = [];
    this.selectedIdioma = [];
    this.applyFilters();
  }

  closePopup() {
    this.close.emit();
  }
  
}
