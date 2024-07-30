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

  toggleSelection(array: string[], value: string) {
    const index = array.indexOf(value);
    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
    this.applyFilters();
  }

  toggleSingleSelection(array: string[], value: string) {
    array.length = 0;
    array.push(value); 
    this.applyFilters();
  }

  applyFilters() {
    this.filterChange.emit({
      status: this.status,
      localidades: this.selectedLocalidad,
      generos: this.selectedGenero,
      idiomas: this.selectedIdioma
    });
  }

  resetFilters() {
    this.status = 'Todos';
    this.selectedLocalidad = [];
    this.selectedGenero = [];
    this.selectedIdioma = [];
    this.applyFilters();
  }

  toggleDropdown(dropdown: string) {
    if (dropdown === 'localidad') {
      this.showLocalidad = !this.showLocalidad;
      this.showGenero = false;
      this.showIdioma = false;
    } else if (dropdown === 'genero') {
      this.showGenero = !this.showGenero;
      this.showLocalidad = false;
      this.showIdioma = false;
    } else if (dropdown === 'idioma') {
      this.showIdioma = !this.showIdioma;
      this.showLocalidad = false;
      this.showGenero = false;
    }
  }

  closePopup() {
    this.close.emit();
  }
}
