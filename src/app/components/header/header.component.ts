import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = true;

  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }

  register() {
    this.router.navigate(['/registro']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
