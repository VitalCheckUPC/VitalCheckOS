import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  signForm : FormGroup;
  constructor(public builder: FormBuilder) {
    this.signForm = builder.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.minLength(8), Validators.required]]
    })
  }

  get email() {
    return this.signForm.controls['email'];
  }

  get password() {
    return this.signForm.controls['password'];
  }

  ngOnInit() {
  }

  cancelSignIn(){
    console.log("Cancelled")
  }

  signIn(){
    console.log("Sign In")
  }
}
