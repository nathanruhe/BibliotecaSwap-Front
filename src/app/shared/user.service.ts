import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Respuesta } from 'src/app/models/respuesta';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://biblioteca-swap-back.vercel.app";
  // private url = "http://localhost:3000";
  
  private _logueado = new BehaviorSubject<boolean>(false);
  public logueado$ = this._logueado.asObservable();
  public user: Usuario;
  private userSubject = new BehaviorSubject<Usuario>(this.getUser());
  public user$ = this.userSubject.asObservable();


  constructor(private http: HttpClient) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this._logueado.next(isLoggedIn);
    
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  public register(user: Usuario): Observable<any> {
    return this.http.post(this.url + "/register", user);
  }

  public login(user: Usuario): Observable<any> {
    return this.http.post(this.url + "/login", user).pipe(
      tap((response: any) => {
        this._logueado.next(true);
        localStorage.setItem('isLoggedIn', 'true');
        this.user = response.dataUser; 
        localStorage.setItem('user', JSON.stringify(response.dataUser));
      })
    );
  }

  public logout() {
    this._logueado.next(false);
    this.user = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  public profile(id_user: number): Observable<any> {
    return this.http.get(this.url + "/perfil/" + id_user);
  }

  getUserById(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.url}/perfil-otros/${id}`);
  }

  public userHidden(id_user: number, hidden: boolean): Observable<any> {
    return this.http.put(this.url + "/perfil/hidden", { id_user, hidden });
  }

  public updateProfile(user: Usuario): Observable<any> {
    return this.http.put(this.url + "/perfil/editar", user);
  }  

  updateUserProfile(updatedUser: any) {
    return this.http.put<{success: boolean, data: any}>('/api/user/update', updatedUser);
  }

  public updatePreferences(preferences: any): Observable<any> {
    return this.http.put(this.url + "/perfil/preferencias", preferences);
  }
  
  public changePassword(id: number, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.put(this.url + "/perfil/cambiar-contrasena", { id_user: id, currentPassword, newPassword });
  }
  getUser(): Usuario {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user ? user : {} as Usuario;
  }
  setUser(user: Usuario): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUserObservable(): Observable<Usuario> {
    return this.userSubject.asObservable();
  }

}
