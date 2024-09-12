import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';
import { Libro } from 'src/app/models/libro'; 
import { ActivatedRoute } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-perfil-otros',
  templateUrl: './perfil-otros.component.html',
  styleUrls: ['./perfil-otros.component.css']
})
export class PerfilOtrosComponent {

  public user: Usuario;
  public mostrar: boolean = true;
  public activo: string = 'biblioteca';
  public milibro: Libro

  public userId: number;
  public likes: any[] = [];
  public likedBookIds: number[] = [];
  public userBooks: any[] = [];
  public ownerId: number;
  
 

  genreIcons: { [key: string]: string } = {
    'Terror': '../../../assets/iconoTerror.jpg',
    'Policiacas': '../../../assets/iconoPoli.png',
    'Poesía': '../../../assets/iconoPoesia.png',
    'Idiomas': '../../../assets/iconoIdioma.png',
    'Astrología': '../../../assets/iconoAstro.jpeg',
    'Fotografía': '../../../assets/iconoFoto.png',
  };

  constructor(private userService: UserService, private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    this.userId = this.getUserIdFromLocalStorage();
    console.log("El id de usuario es: ", this.userId);

    this.route.params.subscribe(params => {
      const ownerId = +params['ownerId'];
      this.loadUserData(ownerId);
      this.loadLikes()
    });
  }
  getUserIdFromLocalStorage(): number {
    return Number(localStorage.getItem('userId'));
  }

  loadLikes(): void {
    this.bookService.getBooksLikes().subscribe(
      (response) => {
        if (!response.error) {
          const allBooks = response.dataBook; 
          //const allLikes = response.dataLikes; 
          //console.log("Datos de libros:", allBooks);
          //console.log("Datos de likes:", allLikes);
    
          this.userBooks = allBooks.filter(book => book.liked_by_user === this.userId);
          console.log("Libros logueado con like:", this.userBooks);
      
        } else {
          console.error('Error al cargar los libros y likes:', response.message);
        }
      },
      (error) => {
        console.error("Error al obtener los libros y likes:", error);
      }
    );
  }


  loadUserData(ownerId: number) {
    this.userService.getUserById(ownerId).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.user = resp.dataUser
        console.log(resp.dataUser);
        console.log(resp.dataUser.id_user);
      }
    });
  }

  getGenreIcon(genre: string): string {
    return this.genreIcons[genre] || '';
  }

  setActiveTab(tab: string): void {
    this.activo = tab;
  };

};