import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private url = "https://biblioteca-swap-back.vercel.app";
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
    return this.http.get(this.url + "/lastBooks");
  };

  public userLikesBooks (id_user) {
    return this.http.get(this.url + "/favoritos/" + id_user);
  };

}
