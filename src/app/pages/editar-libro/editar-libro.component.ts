import { Component } from '@angular/core';
import { Libro, books } from 'src/app/models/libro';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent {

  book = {
    title: 'El barco de Teseo',
    author: 'J.J. Abrams',
    gender: 'Narrativa Fantástica',
    idioma: 'Español',
    photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg'
  };

  public books: Libro[];
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      gender: [, Validators.required],
      idioma: [, Validators.required],
      photo: [, Validators.required],
    })

  }

  public editBook(title: string, author: string, gender: string, photo: string, idioma: string, province: string = " ", like: boolean = false, status: boolean = true, id_book: number = 0, id_user: number = 0) {

    let book = { title, author, gender, photo, idioma, province, like, status, id_book, id_user };
    const index = books.findIndex(libro => libro.id_book === book.id_book);
    if (index !== -1) {
      books[index] = book;
      this.form.reset();
      return true;
    }
    return false;
  }

}
