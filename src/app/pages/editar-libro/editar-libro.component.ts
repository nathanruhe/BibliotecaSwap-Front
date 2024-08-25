import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  public book: Libro = {} as Libro; 
  public form: FormGroup;
  private bookId: number;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      photo: ['', Validators.required],
      language: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id_book');
    if (this.bookId) {
      console.log("ID del libro a editar:", this.bookId);
      this.loadBook(this.bookId);
    }
  }

  private loadBook(bookId: number): void {
    this.bookService.getBookById(bookId).subscribe(
      (response: any) => { 
        if (response && response.data) {
          this.book = response.data;
          console.log("Datos del libro cargados:", this.book);
          this.form.patchValue({
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            photo: this.book.photo,
            language: this.book.language
          });
        }
      },
      error => {
        console.error('Error al cargar el libro:', error);
      }
    );
  }

  public editBook(): void {
    if (this.form.valid) {
      const bookData = this.form.value;

      this.bookService.updateBook(this.bookId, bookData).subscribe(
        response => {
          console.log('Libro actualizado correctamente:', response);
          this.router.navigate(['/miBiblioteca']);
        },
        error => {
          console.error('Error al actualizar el libro:', error);
        }
      );
    }
  }

}