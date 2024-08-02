import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  public book: Libro;
  public user: Usuario;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.book = {
      photo: "https://m.media-amazon.com/images/I/71mE8X0q3rL._SY342_.jpg", 
      title: "Ama tu soledad", 
      author: "Autor 1", 
      gender: "Terror",
      like: undefined, 
      id_user: undefined, 
      id_book: undefined, 
      status: undefined, 
      province: undefined, 
      idioma: undefined
    }

    this.user = {
      id_user: 1,
      name: "Roberto",
      last_name: "Martinez",
      email: "roberto@gmail.com",
      photo: "https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170402236/75461964-ilustraci%C3%B3n-de-vector-de-dibujos-animados-hombre-imagen-de-dise%C3%B1o-chico-eps-10.jpg",
      province: "Barcelona",
      availability: "mañanas",
      genders: [
        "../../../assets/iconoTerror.jpg",
        "../../../assets/iconoPoesia.png",
        "../../../assets/iconoPoli.png",
        "../../../assets/iconoAstro.jpeg",
        "../../../assets/iconoIdioma.png",
        "../../../assets/iconoFoto.png",
      ],
      password: "123Roberto.",
    };
  };

  visitarPerfil(): void {
    this.router.navigateByUrl(`/perfil-otros`);
    // this.router.navigateByUrl(`/perfil-otros/${this.user.id_user}`);
    // PENDIENTE IMPLEMENTARLO PARA QUE APUNTE AL ID DEL USUARIO
  };
}