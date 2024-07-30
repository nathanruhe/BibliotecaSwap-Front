import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libro-landing',
  templateUrl: './libro-landing.component.html',
  styleUrls: ['./libro-landing.component.css']
})
export class LibroLandingComponent {

  @Input() libro: Libro;

  constructor() { }

  ngOnInit(): void {
    
  }

}
