import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent {

  book = {
    title: 'El Enigma de las Arenas',
    author: 'Robert Erskine Childers',
    gender: 'Novela Contemporánea',
    photo: 'https://imagessl6.casadellibro.com/a/l/s7/66/9788435055666.webp'
  };

  public editBook() {
    // const user = this.form.value;
    // console.log(user);
    // this.form.reset();
  };

}
