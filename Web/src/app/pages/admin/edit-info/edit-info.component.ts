import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../_core/services/api.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from "../../../_core/services/auth.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent {

  form: FormGroup;
  formWasSubmitted: boolean;

  constructor(private api: ApiService, private auth: AuthService, private http: HttpClient) {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      oldPassword: new FormControl('', [
        Validators.required
      ]),
      newPassword: new FormControl('', [
        Validators.required
      ]),
      repeatNewPassword: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(){

    this.formWasSubmitted = true;

    if (this.form.valid){

      if(this.form.value.newPassword == this.form.value.repeatNewPassword){

        let body = new HttpParams();
        body = body.set('email', this.form.value.email);
        body = body.set('oldPassword', this.form.value.oldPassword);

        this.api.post('account/changeUserInfo', this.form.value).subscribe(
          response => {

            this.auth.logout();

          }
        );
      }else{
        alert('Новый пароль не совпал с Повторите новый пароль')
      }

    }

  }

}
