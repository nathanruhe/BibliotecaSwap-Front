import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
// import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://biblioteca-swap-back.vercel.app";
  // private url = "http://localhost:3000";

  public user: Usuario;
  public libro: Libro | null = null;
  public books: Libro[];

  constructor(private http: HttpClient) { }

  setSelectedBook(book: Libro) {
    this.libro = book;
    // añado la info del libro al sesionStorage para que se guarde al recargar la web
    sessionStorage.setItem('selectedLibro', JSON.stringify(book));
  }

  getSelectedBook(): Libro | null {
    return this.libro;
  }

  clearSelectedBook() {
    this.libro = null;
    // limpio la info del libro del sessionStorage
    sessionStorage.removeItem('selectedLibro');
  }

  public landing () {
    return this.http.get(this.url + "/lastBooks");
  };

  public userLikesBooks (id_user) {
    return this.http.get(this.url + "/favoritos/" + id_user);
  };

  public userLikesBooksMore (id_user, currentPage) {
    return this.http.get(this.url + "/load/" + id_user + "/" + currentPage);
  };

  public lastBook(){
    return this.http.get(this.url + "/lastBook");
  }

  public addBook(book: Libro, id_user: string) {
    return this.http.post(this.url + "/addLibro/" + id_user, book);
  };

  public getBooks(userProvince): Observable<any> {
    return this.http.get(this.url + "/home/" + userProvince);
  };

  public getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/home`);
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

  public updateBookStatus(idBook: number, updateData: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${idBook}/status`, updateData);
  }

  updateExpiredBooks(): Observable<any> {
    return this.http.post<any>(`${this.url}/updateExpiredBooks`, {});
  }
  public iLikesBooks(id_user): Observable<any> {
    return this.http.get(this.url + "/favoritos/" + id_user);
  };

  public getAllLikes(): Observable<any> {
    return this.http.get(this.url + "/favoritos");
  }

  public addLike(id_book: number, id_user: number): Observable<any> {
    const body = { id_book, id_user };
    return this.http.post(`${this.url}/addLike`, body);
  }
  
  public removeLike(id_book: number, id_user: number): Observable<any> {
    const options = {
      body: { id_book, id_user }
    };
    return this.http.delete(`${this.url}/removeLike`, options);
  }

  public getBooksLikes(): Observable<any> {
    return this.http.get(`${this.url}/books-likes`);
  }

}