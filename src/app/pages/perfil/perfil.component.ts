import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Libro } from 'src/app/models/libro';
import { Resena  } from 'src/app/models/resena';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  @Input() book: Libro;
  @Output() put = new EventEmitter<Usuario>();

  public user: Usuario;
  public misResenas: Resena[];

  constructor() {}

  ngOnInit(): void {

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
      hidden: false,
    };

    this.misResenas = [
      {
         nombre: "Juan",
        apellido: "Perez",
        valoracion: 4,
        comentario: "La narrativa está llena de giros inesperados y momentos conmovedores que mantienen al lector completamente inmerso en la historia de principio a fin, haciendo que sea difícil dejar de leer."
      },
      {
        nombre: "Ana",
        apellido: "Garcia",
        valoracion: 5,
        comentario: "El libro tiene un buen ritmo y personajes bien desarrollados, pero el final fue un poco predecible."
      },
      {
        nombre: "Carlos",
        apellido: "Miranda",
        valoracion: 2,
        comentario: "Este libro es una joya literaria que combina una trama envolvente, personajes profundamente desarrollados y una prosa exquisita; desde las primeras páginas, me sumergí en un mundo fascinante lleno de giros inesperados y emociones intensas, y cada capítulo me dejó con una sensación de asombro y reflexión, lo que hace que esta obra sea una lectura obligatoria para cualquier amante de la literatura."
      },
      {
        nombre: "Maria",
        apellido: "Lorente",
        valoracion: 3,
        comentario: "Este libro logra capturar la atención del lector desde el principio con su trama intrigante y personajes complejos, ofreciendo una experiencia de lectura verdaderamente enriquecedora."
      }
    ];

  }

  onEdit(): void {
    this.put.emit(this.user);
  }

  onHidden(): void {
    let user = document.getElementById('usuario');
    user.hidden = true;
  }

}
