import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

  public admin: Usuario;
  public administradores: Usuario[]

  constructor() {

    this.administradores = [

      {
        id_user: 1,
        name: "Jonathan",
        last_name: "Ruiz",
        email: "Azul@gmail.com",
        photo: "../../../assets/jonathan.png",
        about: "Desarrollador/a Full-Stack 💻--> Todo esto empezó como proyecto final de un bootcamp. Ahí conocí " +
                "al resto del equipo y nos fue tan bien que  le dimos vida y lo sacamos a la web.",
        rating: 3,
        province: "Almería",
        availability: "tardes",
        genres: [
          "../../../assets/iconoTerror.jpg",
          "../../../assets/iconoPoesia.png",
          "../../../assets/iconoPoli.png",
          "../../../assets/iconoAstro.jpeg",
          "../../../assets/iconoIdioma.png",
          "../../../assets/iconoFoto.png",
        ],
        password: "23HappYear.",
        hidden: false,
        totalResenas: null
      },
      {
        id_user: 2,
        name: "Jesús",
        last_name: "Muñoz",
        email: "Verde@gmail.com",
        photo: "../../../assets/jesus.jpg",
        about: "Desarrollador/a Full-Stack 💻--> Todo esto empezó como proyecto final de un bootcamp. Ahí conocí " +
                "al resto del equipo y nos fue tan bien que  le dimos vida y lo sacamos a la web.",
        rating: 3,
        province: "Almería",
        availability: "tardes",
        genres: [
          "../../../assets/iconoTerror.jpg",
          "../../../assets/iconoPoesia.png",
          "../../../assets/iconoPoli.png",
          "../../../assets/iconoAstro.jpeg",
          "../../../assets/iconoIdioma.png",
          "../../../assets/iconoFoto.png",
        ],
        password: "23HappYear.",
        hidden: false,
        totalResenas: null
      },
      {
        id_user: 3,
        name: "Queensley",
        last_name: "Odigie",
        email: "Morado@gmail.com",
        photo: "../../../assets/queen.jpg",
        about: "Desarrollador/a Full-Stack 💻--> Todo esto empezó como proyecto final de un bootcamp. Ahí conocí " +
                "al resto del equipo y nos fue tan bien que  le dimos vida y lo sacamos a la web.",
        rating: 3,
        province: "Almería",
        availability: "tardes",
        genres: [
          "../../../assets/iconoTerror.jpg",
          "../../../assets/iconoPoesia.png",
          "../../../assets/iconoPoli.png",
          "../../../assets/iconoAstro.jpeg",
          "../../../assets/iconoIdioma.png",
          "../../../assets/iconoFoto.png",
        ],
        password: "23HappYear.",
        hidden: false,
        totalResenas: null
      },
      {
        id_user: 4,
        name: "Judit",
        last_name: "Amate",
        email: "Naranja@gmail.com",
        photo: "../../../assets/judit.jpg",
        about: "Desarrollador/a Full-Stack 💻--> Todo esto empezó como proyecto final de un bootcamp. Ahí conocí " +
                "al resto del equipo y nos fue tan bien que  le dimos vida y lo sacamos a la web.",
        rating: 3,
        province: "Almería",
        availability: "tardes",
        genres: [
          "../../../assets/iconoTerror.jpg",
          "../../../assets/iconoPoesia.png",
          "../../../assets/iconoPoli.png",
          "../../../assets/iconoAstro.jpeg",
          "../../../assets/iconoIdioma.png",
          "../../../assets/iconoFoto.png",
        ],
        password: "23HappYear.",
        hidden: false,
        totalResenas: null
      },
    ]

  }

}
