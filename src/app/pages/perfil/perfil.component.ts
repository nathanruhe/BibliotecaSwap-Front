import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// import { Libro } from 'src/app/models/libro';
import { Resena  } from 'src/app/models/resena';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // @Input() user: Usuario;
  @Output() put = new EventEmitter<Usuario>();
  // @Output() onHidden = new EventEmitter<Usuario>();

  public user: Usuario;
  public resena: Resena;
  public misResenas: Resena[];

  genreIcons: { [key: string]: string } = {               // no coge los iconos
    'Terror': '../../../assets/iconoTerror.jpg',
    'Policiacas': '../../../assets/iconoPoli.png',
    'Poesía': '../../../assets/iconoPoesia.png',
    'Idiomas': '../../../assets/iconoIdioma.png',
    'Astrología': '../../../assets/iconoAstro.jpeg',
    'Fotografía': '../../../assets/iconoFoto.png',
  };

  constructor(private router: Router, public userService: UserService) {
    this.user = this.userService.user;
    console.log('usuario perfil:', this.user)
  }

  ngOnInit(): void {
    
    this.userService.profile(this.user.id_user).subscribe(response => {
      console.log(response);
    })

    // this.user = {
    //   id_user: 1,
    //   name: "Jose",
    //   last_name: "Padilla Torres",
    //   email: "genial&dad@gmail.com",
    //   photo: "../../../assets/icons/user2.png",
    //   about: " ",
    //   rating: 3,
    //   province: "Almería",
    //   availability: "tardes",
    //   genres: [
    //     "../../../assets/iconoTerror.jpg",
    //     "../../../assets/iconoPoesia.png",
    //     "../../../assets/iconoPoli.png",
    //     "../../../assets/iconoAstro.jpeg",
    //     "../../../assets/iconoIdioma.png",
    //     "../../../assets/iconoFoto.png",
    //   ],
    //   password: "23HappYear.",
    //   hidden: false,
    //   totalResenas: null,
    // };

    this.misResenas = [       // volver a definirlo, user.resenas
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

    // this.userService.

  }

  onEdit(): void {
    this.put.emit(this.user);
  }

  onHidden() {
    this.user.hidden = !this.user.hidden;
    // this.onHidden.emit(this.user);
  }

  getGenreIcon(genre: string): string {
    return this.genreIcons[genre] || '';
  }

}
