import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
  title ="";
  emptyFields = false;

  doLogin(): void {
    if (this.emailLogin === '' || this.passwordLogin === '') {
      this.emptyFields = true;
    } else {
      alert('You are now logged in');
      //this.router.navigate(['/home/levels']);
    }
  }

  doRegister(): void {
    if (this.emailReg === '' || this.nameReg === '' || this.lastnameReg === '' || this.rucReg === '' || this.passwordReg === '' || this.confirmReg === '') {
      this.emptyFields = true;
    } else {
      alert('You are now registered');
      // Replace the following line with your routing logic
      // this.router.navigate(['/home/levels']);
    }
  }

  toggleRegister(): void {
    this.registerActive = !this.registerActive;
    this.emptyFields = false;
  }

  
  
}
