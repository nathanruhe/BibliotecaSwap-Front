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

  book = {
    title: 'El Enigma de las Arenas',
    author: 'Robert Erskine Childers',
    gender: 'Novela Contemporánea',
    idioma: 'Español',
    photo: 'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp'
  };

  public books: Libro[];
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      gender: [, Validators.required],
      idioma: [, Validators.required],
      photo: [, Validators.required],
    })

  }
  public addBook(title: string, author: string, gender: string, photo: string, idioma: string, propietario: Usuario = null, prestatario: Usuario = null, startDate: Date = null, endDate: Date = null, like: boolean = false, status: boolean = true, id_book: number = 0, id_user: number = 0) {

    let book = { title, author, gender, photo, idioma, propietario, prestatario, startDate, endDate, like, status, id_book, id_user };
    
    console.log(book);
    console.log(this.books);

    this.books.push(book); 
    this.form.reset();
    
    return this.books; 

  };
  
  navigateEditBook() {
    this.router.navigateByUrl("/editLibro");
  }

}
