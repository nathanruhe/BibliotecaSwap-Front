import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://biblioteca-swap-back.vercel.app";
  public book: Libro;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.url + "/home");
  }

  public getOne(id_book: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.url}/home/${id_book}`);
  }

}
