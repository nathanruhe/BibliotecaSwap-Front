import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-biblioteca',
  templateUrl: './libro-biblioteca.component.html',
  styleUrls: ['./libro-biblioteca.component.css']
})
export class LibroBibliotecaComponent {

  @Input() book: Libro;
  @Input() filterType: string;
  @Output() delete = new EventEmitter<Libro>();
  @Input() isAddBook: boolean = false;

  constructor(private router: Router) {}

  onDelete(): void {
    this.delete.emit(this.book);
  }

  navigateEditBook() {
    this.router.navigateByUrl("/editLibro");
  }
}