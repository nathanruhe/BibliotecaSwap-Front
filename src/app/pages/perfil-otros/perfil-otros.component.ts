import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';
import { Libro } from 'src/app/models/libro'; 
import { ActivatedRoute } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';

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

  genreIcons: { [key: string]: string } = {
    'Terror': '../../../assets/iconoTerror.jpg',
    'Policiacas': '../../../assets/iconoPoli.png',
    'Poesía': '../../../assets/iconoPoesia.png',
    'Idiomas': '../../../assets/iconoIdioma.png',
    'Astrología': '../../../assets/iconoAstro.jpeg',
    'Fotografía': '../../../assets/iconoFoto.png',
  };

  constructor(private userService: UserService, private route: ActivatedRoute) {
    // this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const ownerId = +params['ownerId'];
      this.loadUserData(ownerId);
    });
  }

  loadUserData(ownerId: number) {
    this.userService.getUserById(ownerId).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.user = resp.dataUser
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
