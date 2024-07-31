import { Component } from '@angular/core';
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

  public books: [];
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      gender: [, [Validators.required]],
    })

  }
  public addBook(title: string, author: string, gender: string, photo: string = " ") {

    let book = { title, author, gender, photo };
    this.form.reset();
    return this.books.push(); //book no me deja meterlo en el push

  };

}
