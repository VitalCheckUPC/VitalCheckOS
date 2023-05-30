import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerUsername: string ="";
  registerPassword: string ="";
  registerEmail: string ="";
  registerPhone: string ="";

  constructor(private router: Router) {}

  register() {
    // Aquí puedes implementar la lógica de registro utilizando los valores del formulario de registro
    // (this.registerUsername, this.registerPassword, this.registerEmail, this.registerPhone)

    // Por ejemplo, puedes enviar los datos a tu API para crear una cuenta de usuario

    // Después de un registro exitoso, redirige al usuario al menú principal
    this.router.navigate(['/sidenav']);
  }
}
