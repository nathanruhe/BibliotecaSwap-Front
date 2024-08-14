import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://biblioteca-swap-back.vercel.app";
  // private url = "http://localhost:3000";
  
  public libro: Libro | null = null;

  constructor() { }

  setSelectedBook(book: Libro) {
    this.libro = book;
  }

  getSelectedBook(): Libro | null {
    return this.libro;
  }

  clearSelectedBook() {
    this.libro = null;
  }
}
