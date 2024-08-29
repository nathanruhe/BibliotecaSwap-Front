import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

<<<<<<< HEAD
  //private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";
  
=======
  // private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";

  public user: Usuario;
>>>>>>> dia7_Judit
  public libro: Libro | null = null;
  public books: Libro[];

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
    return this.http.get(this.url + "/lastBooks");
  };

  public userLikesBooks (id_user) {
    return this.http.get(this.url + "/favoritos/" + id_user);
  };

  public getBooks(userProvince): Observable<any> {
    return this.http.get(this.url + "/home/" + userProvince);
  };

  public getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/home`);
  };

  public addBook(book: Libro) {
    return this.http.put(this.url + "/addLibro", book);
  };

  public editBook(book: Libro) {
    return this.http.patch(this.url + "/editLibro", book);
  };

  public getBooksUsers(userId: number): Observable<any> {
    return this.http.get(`${this.url}/biblioteca`, {
      params: { userId: userId.toString() }
    });
  }

  public deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.url}/book/${id}`);
  }

  public updateBook(id: number, bookData: any): Observable<any> {
    return this.http.put(`${this.url}/book/${id}`, bookData);
  }
  public getBookById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.url}/book/${id}`);
  }

}