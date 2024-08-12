import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anadir-libro',
  templateUrl: './anadir-libro.component.html',
  styleUrls: ['./anadir-libro.component.css']
})


export class AnadirLibroComponent {

  public books: Libro[];
  public form: FormGroup;

  // añado para hardcodear 1 libro
  public book: Libro;

  constructor(public formBuilder: FormBuilder, private router: Router) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      gender: [, Validators.required],
      idioma: [, Validators.required],
      photo: [, Validators.required],
    })

    // libro hardcodeado
    this.book = new Libro(
      "El Enigma de las Arenas",
      "Robert Erskine Childers",
      "Novela Contemporánea",
      "https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp",
      "Español",
      null, null, null, false, true, null, null
    )

  }


  public addBook(title: string, author: string, genre: string, photo: string, language: string, owner: Usuario = null, borrower: Usuario = null, start_date: Date = null, end_date: Date = null, like: boolean = false, status: boolean = true, id_book: number = 0) {

    let book = { title, author, genre, photo, language, owner, borrower, start_date, end_date, like, status, id_book };

    console.log(book);
    console.log(this.books);

    // this.books.push(book);
    this.form.reset();

    return this.books;

  };

}
