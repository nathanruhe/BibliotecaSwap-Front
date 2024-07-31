import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-anadir-libro',
  templateUrl: './anadir-libro.component.html',
  styleUrls: ['./anadir-libro.component.css']
})
export class AnadirLibroComponent {

  book = {
    title: 'El Enigma de las Arenas',
    author: 'Robert Erskine Childers',
    gender: 'Novela Contemporánea',
    photo: 'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp'
  };

  public books: Libro[];
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      gender: [, [Validators.required]],
    })

  }
  public addBook(id_book: number = 0, id_user: number = 0, title: string, author: string, gender: string, status: boolean = true, photo: string, localidad: string = " ", idioma: string= " ") {

    let book = {  title, author, gender, photo, status, localidad, idioma, id_book, id_user };
    this.form.reset();
    return this.books.push(book); 

  };

}
