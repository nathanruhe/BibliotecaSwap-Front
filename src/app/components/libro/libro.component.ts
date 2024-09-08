import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro'; 
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() book: Libro;
  @Input() usuarios: Usuario[] = [];
  @Output() addToFavorites = new EventEmitter<Libro>();
  @Output() goToPage = new EventEmitter<number>();
  @Input() isHome: boolean = false;
  @Input() isFavoritos: boolean = false;
  @Input() isBiblioteca: boolean = false;
  @Input() isOtroUser: boolean = false;
  @Input() filterType: string; 

  userId: number;

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    console.log('Usuarios disponibles:', this.usuarios);
  }

  navigateToPerfilOtros() {
    //this.router.navigateByUrl("/perfil-otros");
    const ownerId = this.book.owner;
    this.router.navigate(['/perfil-otros', ownerId]);
    //se ha modificado tambien app-routing.module.ts
    // { path: 'perfil-otros/:ownerId', component: PerfilOtrosComponent },
    //antes -> { path: 'perfil-otros', component: PerfilOtrosComponent }
  }

  navigateToChat() {
    if (this.book.status) {
      this.bookService.setSelectedBook(this.book);
      // this.router.navigate(['/chat']);
      const ownerId = this.book.owner;
      this.router.navigate(['/chat', ownerId]);
    }
  }
}