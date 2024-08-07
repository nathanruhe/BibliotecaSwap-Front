import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() closeModal = new EventEmitter<void>();
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
    });
  }

  public login() {
    const user = this.myForm.value;

    if (this.myForm.valid) {
      console.log(user);
      this.router.navigateByUrl("/home");
      this.closeModal.emit();
    } else {
      console.log("NO FUNCIONA");
    }
    this.myForm.reset();
  }

  public close() {
    this.closeModal.emit();
  }
}
