import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Libro } from 'src/app/models/libro';
import { Resena  } from 'src/app/models/resena';

@Component({
  selector: 'app-perfil-otros',
  templateUrl: './perfil-otros.component.html',
  styleUrls: ['./perfil-otros.component.css']
})
export class PerfilOtrosComponent implements OnInit {

  public misLibros: Libro[];
  public user: Usuario;
  public misResenas: Resena[];
  public mostrar: boolean = true;
  public activo: string = 'biblioteca';

  constructor() {}

  ngOnInit(): void {
    this.misLibros = [
      new Libro("Ama tu soledad", "Autor 1", "Terror", "https://m.media-amazon.com/images/I/71mE8X0q3rL._SY342_.jpg", "español", null, null, null, null, false, true, null, null),
      new Libro("Padre rico", "Autor 2", "Aventura", "https://m.media-amazon.com/images/I/510hKvoP6bL._SY445_SX342_.jpg", "italiano", null, null, null, null, false, true, null, null),
      new Libro("Liderazgo", "Autor 3", "Ficción", "https://m.media-amazon.com/images/I/41Zuk9AefBL._SY445_SX342_.jpg", "frances", null, null, null, null, false, true, null, null),
      new Libro("Tan poca vida", "Autor 4", "Amor", "https://m.media-amazon.com/images/I/51KnzneiV8L._SY445_SX342_.jpg", "ingles", null, null, null, null, false, true, null, null),
      new Libro("El alquimista", "Autor 5", "Drama", "https://m.media-amazon.com/images/I/51PHOuFmcLL._SY445_SX342_.jpg", "aleman", null, null, null, null, false, true, null, null)
    ];

    this.user = {
      id_user: 1,
      name: "Roberto",
      last_name: "Martinez",
      email: "roberto@gmail.com",
      photo: "https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170402236/75461964-ilustraci%C3%B3n-de-vector-de-dibujos-animados-hombre-imagen-de-dise%C3%B1o-chico-eps-10.jpg",
      about: "¡Hola! Soy un lector apasionado que disfruta de diversos géneros. Siempre busco nuevas recomendaciones y estoy emocionado de ser parte de esta comunidad. ¡Feliz lectura e intercambio!",
      rating: 3,
      province: "Barcelona",
      availability: "mañanas",
      genres: [
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
  };

  setActiveTab(tab: string): void {
    this.activo = tab;
  };

};
