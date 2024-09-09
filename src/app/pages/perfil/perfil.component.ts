import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Resena } from 'src/app/models/resena';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Output() put = new EventEmitter<Usuario>();

  public user: Usuario;
  public resena: Resena;
  public rating: number;
  public misResenas: Resena[];

  public books: any[] = [];      
  public userId: number;
  public userProvince: string;

  genreIcons: { [key: string]: string } = {         
    'Terror': '../../../assets/iconoTerror.jpg',
    'Policiacas': '../../../assets/iconoPoli.png',
    'Poesía': '../../../assets/iconoPoesia.png',
    'Idiomas': '../../../assets/iconoIdioma.png',
    'Astrología': '../../../assets/iconoAstro.jpeg',
    'Fotografía': '../../../assets/iconoFoto.png',
  };

  constructor(private router: Router, public userService: UserService, public bookService: BookService) {
  }

  ngOnInit(): void {
    const userStorage = localStorage.getItem('user');
    this.user = JSON.parse(userStorage);
    
    this.userService.profile(this.user.id_user).subscribe((response: any) => {
      this.rating = response.dataUser.rating;
      this.misResenas = response.dataUser.misResenas;
    })

  }

  onEdit(): void {            // Revisar, no sé si funcionaz
    this.put.emit(this.user);
  }

  onHidden(id_user, hidden) {
    
    this.userService.userHidden(id_user, hidden === true ? false : true).subscribe((response: Respuesta) => {
      
      this.user.hidden = response.dataUser[0].hidden === 1? true : false;

      console.log("Respuesta completa del servidor:", response);
      console.log('usuario perfil:', this.user.hidden);

    })
  };

  getGenreIcon(genre: string): string {
    return this.genreIcons[genre] || '';
  }

}