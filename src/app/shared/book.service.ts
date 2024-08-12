import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public landing () {
    return this.http.get(this.url + "/");
  };

}
