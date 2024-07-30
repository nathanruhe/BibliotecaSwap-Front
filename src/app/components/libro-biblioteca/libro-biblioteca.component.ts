import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 


@Component({
  selector: 'app-libro-biblioteca',
  templateUrl: './libro-biblioteca.component.html',
  styleUrls: ['./libro-biblioteca.component.css']
})
export class LibroBibliotecaComponent {

  @Input() book: Libro;
  
}