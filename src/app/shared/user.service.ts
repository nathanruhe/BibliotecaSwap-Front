import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://biblioteca-swap-back.vercel.app";
  public logueado: boolean = false;
  public user: Usuario;

  constructor(private http: HttpClient) {}

  public register(user: Usuario) {
    return this.http.post(this.url + "/register", user);
  };

  public login(user: Usuario) {
    return this.http.post(this.url + "/login", user);
  };

}
