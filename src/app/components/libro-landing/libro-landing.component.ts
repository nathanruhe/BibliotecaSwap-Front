import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-libro-landing',
  templateUrl: './libro-landing.component.html',
  styleUrls: ['./libro-landing.component.css']
})

export class LibroLandingComponent  {

  @Input() book: Libro;

  constructor(private router: Router) {}

  navigateEditBook() {
    this.router.navigateByUrl("/editLibro");
  }

}