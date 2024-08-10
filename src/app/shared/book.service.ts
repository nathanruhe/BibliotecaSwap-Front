import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://biblioteca-swap-back.vercel.app";

  constructor(private http: HttpClient) { }

  public landing (book: Libro) {
    return this.http.get(this.url + "/");
  };

}
