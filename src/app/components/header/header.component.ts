import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLoggedIn: boolean = false;
  public modal: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.modal = true;
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
