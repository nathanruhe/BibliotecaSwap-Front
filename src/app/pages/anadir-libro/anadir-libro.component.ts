import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-anadir-libro',
  templateUrl: './anadir-libro.component.html',
  styleUrls: ['./anadir-libro.component.css']
})


export class AnadirLibroComponent implements OnInit {

  public books: Libro[];
  public form: FormGroup;

  // añado para hardcodear 1 libro
  public book: Libro;

  constructor(public formBuilder: FormBuilder, private router: Router, public bookService: BookService) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      genre: [, Validators.required],
      idioma: [, Validators.required],
      photo: [, Validators.required],
    })

  }

  ngOnInit(): void {
    
    this.bookService.lastBook().subscribe((respuesta: Respuesta) => {

      this.book = respuesta.book;
      
    });
      
  }

  public addBook() {
    // title: string, author: string, genre: string, photo: string, language: string, owner: Usuario = null, borrower: Usuario = null, start_date: Date = null, end_date: Date = null, like: boolean = false, status: boolean = true, id_book: number = 0

    // let book = { title, author, genre, photo, language, owner, borrower, start_date, end_date, like, status, id_book };
    const book = this.form.value;
    const id_user = localStorage.getItem('userId');

    this.bookService.addBook(book, id_user).subscribe((respuesta: Respuesta) => {

      console.log(respuesta);
      
      // this.book = respuesta.book;
      
    });
    // console.log(book);
    // console.log(this.books);

    // this.books.push(book);
    this.form.reset();

    return this.books;

  };

}
