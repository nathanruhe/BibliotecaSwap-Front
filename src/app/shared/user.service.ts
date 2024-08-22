import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from 'src/app/models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";
  
  public logueado: boolean = false;
  public user: Usuario;

  constructor(private http: HttpClient) {}

  public register(user: Usuario) {
    return this.http.post(this.url + "/register", user);
  };

  public login(user: Usuario) {
    return this.http.post(this.url + "/login", user);
  };

  public profile (id_user: number) {
    return this.http.get(this.url + "/perfil/" + id_user );
  };

  getUserById(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.url}/perfil-otros/${id}`);
  }

  public userHidden(id_user: number, hidden:boolean) {
    return this.http.put(this.url + "/perfil/hidden", {id_user, hidden});
  }
  
}
