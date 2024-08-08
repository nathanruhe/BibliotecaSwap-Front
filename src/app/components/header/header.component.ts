import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = true;
  isLoginModalVisible: boolean = false; 

  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/landing']);
  }

  showLoginModal() {
    this.isLoginModalVisible = true;
  }

  hideLoginModal() {
    this.isLoginModalVisible = false;
  }
}
