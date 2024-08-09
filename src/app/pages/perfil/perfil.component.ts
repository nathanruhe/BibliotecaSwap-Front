import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// import { Libro } from 'src/app/models/libro';
import { Resena  } from 'src/app/models/resena';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() user: Usuario;
  @Output() put = new EventEmitter<Usuario>();
  // @Output() onHidden = new EventEmitter<Usuario>();

  // public user: Usuario;
  public resena: Resena;
  public misResenas: Resena[];

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.user = {
      id_user: 1,
      name: "Jose",
      last_name: "Padilla Torres",
      email: "genial&dad@gmail.com",
      photo: "../../../assets/icons/user2.png",
      about: " ",
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
      totalResenas: null,
    };

    this.misResenas = [
      {
        name: "Juan",
        last_name: "Perez",
        rating: 4,
        comment: "La narrativa está llena de giros inesperados y momentos conmovedores que mantienen al lector completamente inmerso en la historia de principio a fin, haciendo que sea difícil dejar de leer."
      },
      {
        name: "Ana",
        last_name: "Garcia",
        rating: 5,
        comment: "El libro tiene un buen ritmo y personajes bien desarrollados, pero el final fue un poco predecible."
      },
      {
        name: "Carlos",
        last_name: "Miranda",
        rating: 2,
        comment: "Este libro es una joya literaria que combina una trama envolvente, personajes profundamente desarrollados y una prosa exquisita; desde las primeras páginas, me sumergí en un mundo fascinante lleno de giros inesperados y emociones intensas, y cada capítulo me dejó con una sensación de asombro y reflexión, lo que hace que esta obra sea una lectura obligatoria para cualquier amante de la literatura."
      },
      {
        name: "Maria",
        last_name: "Lorente",
        rating: 3,
        comment: "Este libro logra capturar la atención del lector desde el principio con su trama intrigante y personajes complejos, ofreciendo una experiencia de lectura verdaderamente enriquecedora."
      }
    ];

  }

  onEdit(): void {
    this.put.emit(this.user);
  }

  onHidden() {
    this.user.hidden = !this.user.hidden;
    // this.onHidden.emit(this.user);
  }

}
