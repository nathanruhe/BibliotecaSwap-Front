import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";
  
  public libro: Libro | null = null;

  constructor(private http: HttpClient) { }

  setSelectedBook(book: Libro) {
    this.libro = book;
  }

  getSelectedBook(): Libro | null {
    return this.libro;
  }

  clearSelectedBook() {
    this.libro = null;
  }

  public landing () {
    return this.http.get(this.url + "/");
  };

  public userLikesBooks (id_user) {
    return this.http.get(this.url + "/favoritos/" + id_user);
  };


  public getAll(): Observable<any> {
    return this.http.get(this.url + "/home")
  }

  public addLike(id_user: number, id_book: number): Observable<any> {
    return this.http.post(`${this.url}/like`, { id_user, id_book });
  }

  public getUserLikes(id_user: number): Observable<any> {
    return this.http.get(`${this.url}/like/${id_user}`);
  }

}
