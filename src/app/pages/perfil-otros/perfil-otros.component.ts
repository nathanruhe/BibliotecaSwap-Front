import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';
import { Libro } from 'src/app/models/libro'; 

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

  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }

  setActiveTab(tab: string): void {
    this.activo = tab;
  };

};
