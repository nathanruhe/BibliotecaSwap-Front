import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private router: Router, private bookService: BookService, private toastr: ToastrService) {}

  onDelete(): void {
    //this.delete.emit(this.book);

    if (confirm("¿Estás seguro de que deseas eliminar?")) {
      this.bookService.deleteBook(this.book.id_book).subscribe(
        response => {
          this.toastr.success('Libro eliminado correctamente');  // Toast de éxito
          this.delete.emit(this.book);
        },
        error => {
          console.error('Error al eliminar el libro', error);
          this.toastr.error('Hubo un problema al eliminar el libro');  // Toast de error
        }
      );
    }

    /*
    if(confirm("¿Estás seguro de que deseas eliminar este libro?")) {
      this.bookService.deleteBook(this.book.id_book).subscribe(
        response => {
          alert('Libro eliminado correctamente');
          this.delete.emit(this.book);
        },
        error => {
          console.error('Error al eliminar el libro', error);
          alert('Hubo un problema al eliminar el libro');
        }
      );
    }
    */
  }

  navigateEditBook() {
    
    //this.router.navigateByUrl(`/editLibro/${this.book.id_book}`);
    //console.log("Libro pulsado " + this.book);

    if (this.book) {
      console.log("Libro que editaremos:", this.book); 
      this.router.navigate(['/editLibro', this.book.id_book]);
    } else {
      console.error("El objeto 'book' es nulo o indefinido");
    }
    
  }
}

/*
6	
Drácula	
Bram Stoker	
Idiomas	
Inglés	
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLlwq8ulCr4DRLDDcIB4m9ftJhPElg77BPQ&s	
1
1

21	
La Grieta del Silencio	
Javier Castillo	
Terror	
Español	
https://imagessl0.casadellibro.com/a/l/s7/10/9788491296010.webp	
1
1
*/