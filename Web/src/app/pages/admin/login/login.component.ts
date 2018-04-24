import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AuthService} from "../../../_core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  formWasSubmitted: boolean;

  constructor(private auth: AuthService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });

  }

  onSubmit(){

    this.formWasSubmitted = true;
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
    }

  }

}
