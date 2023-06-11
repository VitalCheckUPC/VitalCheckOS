import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent {
  registerActive = false;
  emailLogin = '';
  passwordLogin = '';
  nameReg = '';
  lastnameReg = '';
  emailReg = '';
  rucReg = '';
  passwordReg = '';
  confirmReg = '';
  tipoReg='';
  emptyFields = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  doLogin(): void {
    if (this.emailLogin === '' || this.passwordLogin === '') {
      this.emptyFields = true;
    } else {
      alert('You are now logged in');
      this.router.navigate(['/body/dashboard']);
    }
  }

  doRegister(): void {
    if (this.emailReg === '' || this.nameReg === '' || this.lastnameReg === '' || this.rucReg === '' || this.passwordReg === '' || this.confirmReg === '' || this.rucReg.length !== 11 || this.tipoReg === '') {
      this.emptyFields = true;
    } else {
      alert('You are now registered');
      this.router.navigate(['/body/dashboard']);
    }
  }

  toggleRegister(): void {
    this.registerActive = !this.registerActive;
    this.emptyFields = false;
  }

  
  
}
