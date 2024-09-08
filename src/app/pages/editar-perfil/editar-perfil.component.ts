import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();
  public myForm: FormGroup;
  profileForm: FormGroup;
  public preferencesForm: FormGroup;
  public user: Usuario;
  public provinces: string[] = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Andorra', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lleida', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];
  public genres: string[] = ['Terror', 'Policiacas', 'Poesía', 'Idiomas', 'Astrología', 'Fotografía'];
  genreIcons: { [key: string]: string } = {         
    'Terror': '../../../assets/iconoTerror.jpg',
    'Policiacas': '../../../assets/iconoPoli.png',
    'Poesía': '../../../assets/iconoPoesia.png',
    'Idiomas': '../../../assets/iconoIdioma.png',
    'Astrología': '../../../assets/iconoAstro.jpeg',
    'Fotografía': '../../../assets/iconoFoto.png',
  };

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService ) {
    this.userService.user$.subscribe(user => {
      this.user = user;
      this.initializeForms();
    });
  }

  ngOnInit() { 
    this.userService.user$.subscribe(user => {
      this.user = user;
      this.initializeForms();
    });
  }

  initializeForms() {
    this.profileForm = this.fb.group({
      name: [this.user?.name, Validators.required],
      last_name: [this.user?.last_name, Validators.required],
      province: [this.user?.province, Validators.required],
      photo: [this.user?.photo],
      aboutMe: [this.user?.about, Validators.maxLength(200)]
    });

    this.preferencesForm = this.fb.group({
      availability: [this.user?.availability, Validators.required],
    });

    this.genres.forEach(genre => {
      this.preferencesForm.addControl(genre, this.fb.control(this.user?.genres?.includes(genre) || false));
    });

    this.myForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ]],
      confirmPassword: ['']
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword').value === form.get('confirmPassword').value
      ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser: Usuario = {
        ...this.user,
        name: this.profileForm.value.name,
        last_name: this.profileForm.value.last_name,
        province: this.profileForm.value.province,
        photo: this.profileForm.value.photo,
        about: this.profileForm.value.aboutMe
      };
      this.userService.updateProfile(updatedUser).subscribe(() => {
        this.showToast('Perfil actualizado correctamente.');
      });
    }
  }

  onSubmitPreferences(): void {
    if (this.preferencesForm.valid) {
      const updatedPreferences = {
        id_user: this.user.id_user,
        availability: this.preferencesForm.value.availability,
        genres: this.genres.filter(genre => this.preferencesForm.get(genre).value)
      };
      this.userService.updatePreferences(updatedPreferences).subscribe(() => {
        this.showToast('Preferencias actualizadas correctamente.');
      });
    }
  }

  changePassword(): void {
    if (this.myForm.valid) {
      const { currentPassword, newPassword } = this.myForm.value;
      const userId = this.user.id_user; 
      this.userService.changePassword(userId, currentPassword, newPassword).subscribe(() => {
        this.showToast('Contraseña cambiada correctamente.');
        this.myForm.reset();
      });
    }
  }

  showToast(message: string) {
    this.toastr.success(message);
  }
}
