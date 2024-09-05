import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLoggedIn: boolean = false;
  public isLoginModalVisible: boolean = false; 

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.logueado$.subscribe(logueado => {
      this.isLoggedIn = logueado;
    });
  }

  login() {
    this.isLoginModalVisible = true; 
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.userService.logout(); 
    this.router.navigate(['/']);
  }

  hideLoginModal() {
    this.isLoginModalVisible = false; 
  }

  handleLoginSuccess() {
    this.isLoggedIn = true;
    this.hideLoginModal();
  }
}
