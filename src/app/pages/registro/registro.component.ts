import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; // control formularios

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public myForm: FormGroup;
  public modal: boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', Validators.required],
      province: ['', [Validators.required, this.provinciaValida]],
      availability: ['', Validators.required],
      genders: [[], Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).+$')]],
      password2: ['', [Validators.required, this.checkPasswords.bind(this)]],
    });
  }

  private provinciaValida(control: AbstractControl) {
    const provinciasValidas = ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla", "Huesca", "Teruel", "Zaragoza", "Asturias", "Islas Baleares", "Las Palmas", "Santa Cruz de Tenerife", "Cantabria", "Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora", "Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo", "Barcelona", "Girona", "Lleida", "Tarragona", "Badajoz", "Cáceres", "A Coruña", "Lugo", "Ourense", "Pontevedra", "Madrid", "Murcia", "Navarra", "La Rioja", "Álava", "Gipuzkoa", "Bizkaia", "Ceuta", "Melilla"];
    if (!control.value || provinciasValidas.includes(control.value)) {
      return null;
    } else {
      return { 'provinciaInvalida': { value: control.value } };
    };
  };

  private checkPasswords(control: AbstractControl) {
    let resultado = {mathPassword: true}
    if (control.parent?.value.password == control.value)
      resultado = null;
    return resultado;
  };

  public register() {
    const user = this.myForm.value;
    console.log(user);
    this.modal = true;
    this.myForm.reset();
  };
}