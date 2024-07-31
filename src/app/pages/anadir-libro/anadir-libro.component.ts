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

  public addBook() {
    // const user = this.form.value;
    // console.log(user);
    // this.form.reset();
  };

}
