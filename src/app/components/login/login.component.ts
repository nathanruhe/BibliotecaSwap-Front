import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; // control formularios
import { Router } from '@angular/router'; 
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();
  public myForm: FormGroup;
  public modal = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {

    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
    });
  }

  public login() {
    const user = this.myForm.value;

    this.userService.login(user).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.userService.user = resp.dataUser;
        localStorage.setItem('userId', resp.dataUser.id_user.toString());
        localStorage.setItem('userProvince', resp.dataUser.province);

        this.router.navigateByUrl("/home");
        this.closeModal.emit(); 
        this.loginSuccess.emit();
        console.log(resp);
      } else {
        console.log(resp);
      }
    }, (error) => {
      console.error('error al realizar el login', error);
    });
    this.myForm.reset();
  }

  public close() {
    this.closeModal.emit();
  }
}
