import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; // control formularios
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public myForm: FormGroup;
  public modal: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.myForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
    })
  }


  public login() {
    const user = this.myForm.value;

    if (this.myForm.valid) {
      console.log(user);
      this.router.navigateByUrl("/home");
      this.modal = false
    } else {
      console.log("NO FUNCIONA");
    };
    this.myForm.reset();
  };

}