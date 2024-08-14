import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLoggedIn: boolean = false;
  public modal: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.isLoggedIn = this.userService.logueado;
  }

  login() {
    this.modal = true;
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.userService.logueado = false;
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  onCloseModal() {
    this.modal = false;
    this.isLoggedIn = this.userService.logueado;
  }
}
