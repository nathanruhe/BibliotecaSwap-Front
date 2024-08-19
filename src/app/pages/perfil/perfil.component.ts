import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Resena  } from 'src/app/models/resena';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

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
    
    this.userService.profile(this.user.id_user).subscribe((response: any) => {
      this.rating = response.dataUser.rating;
      this.misResenas = response.dataUser.misResenas;
    })

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
