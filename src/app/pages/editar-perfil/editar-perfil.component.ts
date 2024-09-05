import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();
  public myForm: FormGroup;
  public profileForm: FormGroup;
  public preferencesForm: FormGroup;
  public user: Usuario;
  public genres: string[] = ['Terror', 'Poesía', 'Policiacas', 'Fotografía', 'Astrología', 'Idiomas'];
  public provinces: string[] = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Andorra', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lleida', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    // Initialize profile form with correct property names
    this.profileForm = this.fb.group({
      name: [this.user?.name, Validators.required],
      lastName: [this.user?.last_name, Validators.required],
      province: [this.user?.province, Validators.required],
      aboutMe: [this.user?.about, Validators.maxLength(200)]
    });

    // Initialize preferences form with correct property names
    this.preferencesForm = this.fb.group({
      availability: [this.user?.availability, Validators.required],
    });

    // Create genre checkboxes based on user genres
    this.genres.forEach(genre => {
      this.preferencesForm.addControl(genre, this.fb.control(this.user?.genres?.includes(genre) || false));
    });

    // Initialize password change form
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

  ngOnInit(): void { }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword').value === form.get('confirmPassword').value
      ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser: Usuario = {
        ...this.user,
        name: this.profileForm.value.name,
        last_name: this.profileForm.value.lastName,
        province: this.profileForm.value.province,
        about: this.profileForm.value.aboutMe
      };
      this.userService.updateProfile(updatedUser).subscribe(() => {
        alert('Perfil actualizado correctamente.');
      });
    }
  }

  onSubmitPreferences(): void {
    if (this.preferencesForm.valid) {
      const updatedPreferences = {
        availability: this.preferencesForm.value.availability,
        genres: this.genres.filter(genre => this.preferencesForm.get(genre).value)
      };
      this.userService.updatePreferences(updatedPreferences).subscribe(() => {
        alert('Preferencias actualizadas correctamente.');
      });
    }
  }
  
  changePassword(): void {
    if (this.myForm.valid) {
      const { currentPassword, newPassword } = this.myForm.value;
      const userId = this.user.id_user; 
      this.userService.changePassword(userId, currentPassword, newPassword).subscribe(() => {
        alert('Contraseña cambiada correctamente.');
        this.myForm.reset();
      });
    }
  }
}
