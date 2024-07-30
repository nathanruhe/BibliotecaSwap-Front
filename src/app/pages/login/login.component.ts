import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; // control formularios

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
    })
  }


  public login() {
    const user = this.myForm.value;

    if (this.myForm.valid) {
      console.log(user);
    } else {
      console.log("NO FUNCIONA");
    };
    this.myForm.reset();
  };

}
