import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginUsername: string = '';
  loginPassword: string = '';

  constructor(private router: Router) {}

  login() {
    // Simulación de lógica de autenticación
    if (this.loginUsername === 'usuario' && this.loginPassword === '123456') {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/sidenav']); // Redirige al menú principal en caso de inicio de sesión exitoso
    } else {
      console.log('Credenciales inválidas');
    }
  }

  redirectToRegistration(type: string) {
    this.router.navigate(['/registration']);
  }
}
