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

  // private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";
  
  private _logueado = new BehaviorSubject<boolean>(false);
  public logueado$ = this._logueado.asObservable();
  private userSubject = new BehaviorSubject<Usuario>(this.getUser());
  public user$ = this.userSubject.asObservable();
  updateUserProfile: any;
  user: Usuario;
  getCurrentUser: any;

  constructor(private http: HttpClient) {
    this.checkAuthStatus();
  }

  private checkAuthStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      this._logueado.next(true);
      const userData = this.getUser();
      if (userData && Object.keys(userData).length > 0) {
        this.userSubject.next(userData);
      } else {
        this.logout();
      }
    } else {
      this.logout();
    }
  }

  public register(user: Usuario): Observable<any> {
    return this.http.post(this.url + "/register", user);
  }

  public login(user: Usuario): Observable<any> {
    return this.http.post(this.url + "/login", user).pipe(
      tap((response: any) => {
        if (!response.error) {
          this._logueado.next(true);
          sessionStorage.setItem('isLoggedIn', 'true');
          this.userSubject.next(response.dataUser);
          sessionStorage.setItem('user', JSON.stringify(response.dataUser));
        }
      })
    );
  }

  public logout() {
    this._logueado.next(false);
    this.userSubject.next({} as Usuario);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
  }

  public profile(id_user: number): Observable<any> {
    return this.http.get(this.url + "/perfil/" + id_user);
  }

  public getUserById(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.url}/perfil-otros/${id}`);
  }

  public userHidden(id_user: number, hidden: boolean): Observable<any> {
    return this.http.put(this.url + "/perfil/hidden", { id_user, hidden });
  }

  public updateProfile(user: Usuario): Observable<any> {
    return this.http.put(this.url + "/perfil/editar", user).pipe(
      tap(() => {
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }  

  public updatePreferences(preferences: any): Observable<any> {
    return this.http.put(this.url + "/perfil/preferencias", preferences);
  }
  
  public changePassword(id: number, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.put(this.url + "/perfil/cambiar-contrasena", { id_user: id, currentPassword, newPassword });
  }

  getUser(): Usuario {
    const userData = sessionStorage.getItem('user');
    
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch (error) {
        console.error('Error al parsear el usuario desde sessionStorage', error);
        sessionStorage.removeItem('user'); 
        return {} as Usuario; 
      }
    }
  
    return {} as Usuario;  
  }  

  setUser(user: Usuario): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUserObservable(): Observable<Usuario> {
    return this.userSubject.asObservable();
  }

  submitRating(idRated: number, idRater: number, rating: number, comment: string): Observable<Respuesta> {
    const ratingData = {
      id_rated: idRated,
      id_rater: idRater,
      rating: rating,
      comment: comment
    };
    return this.http.post<Respuesta>(`${this.url}/ratings`, ratingData);
  }
  
}
