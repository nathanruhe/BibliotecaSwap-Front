import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-anadir-libro',
  templateUrl: './anadir-libro.component.html',
  styleUrls: ['./anadir-libro.component.css']
})


export class AnadirLibroComponent implements OnInit {

  public book: Libro = {
    title: 'Título del Úlitmo Libro Insertado',
    author: 'Autor',
    genre: 'Género',
    photo: 'https://img.freepik.com/vector-premium/adorno-oro-sobre-fondo-cuero-puede-utilizar-como-tarjeta-invitacion-ilustracion-vectorial_443748-1466.jpg',
    language: 'Idioma',
    borrower: null,
    start_date: null,
    end_date: null,
    like: null,
    status: true,
    id_book: null,
    owner: null
  };

  public books: Libro[];
  public form: FormGroup;

  // public book: Libro;

  constructor(public formBuilder: FormBuilder, private router: Router, public bookService: BookService, private toastr: ToastrService) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      genre: [, Validators.required],
      idioma: [, Validators.required],
      photo: [, Validators.required],
    })

  }

  ngOnInit(): void {

    // this.toastr.success('Hello world!', 'Toastr fun!');
    
    // this.bookService.lastBook().subscribe((respuesta: Respuesta) => {

    //   this.book = respuesta.book;
      
    // });
      
  }

  public addBook() {
    const book = this.form.value;
    const id_user = localStorage.getItem('userId');

    this.bookService.addBook(book, id_user).subscribe((respuesta: Respuesta) => {

      this.form.reset();
      this.toastr.success('Libro Insertado Correctamente!', 'Libro añadido!');
      this.book = respuesta.book[0];
      // return this.books;

    });
   
    // this.form.reset();
    this.bookService.lastBook().subscribe((respuesta: Respuesta) => {

      this.book = respuesta.book;
      
    });

    return this.books;

  };

}
