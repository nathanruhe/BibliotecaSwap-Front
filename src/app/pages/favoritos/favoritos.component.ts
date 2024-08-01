import { Component } from '@angular/core';
import { Libro, books } from 'src/app/models/libro';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  public books: Libro[] = [];

}
