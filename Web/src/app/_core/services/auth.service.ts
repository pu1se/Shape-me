import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {ApiService} from "./api.service";
import {Router} from '@angular/router';
import * as jwt from 'jwt-decode';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  private _currentUser: UserModel;
  private CONST_TOKEN_NAME = 'shape_me_token';

  constructor(private api: ApiService, private router: Router){}

  login(email: string, password: string){

    const body = new HttpParams()
      .set('username', email)
      .set('grant_type', 'password')
      .set('password', password);

    this.api.post('token', body.toString()).subscribe(
      data => {

        console.log(data.userName);
        console.log(data.access_token);
        console.log(JSON.stringify(data));
        localStorage.setItem(this.CONST_TOKEN_NAME, data.access_token);
        this.router.navigate(['/']);

    });

    /*var loginData = {
      grant_type: 'password',
      username: email,
      password: password
    };

    $.ajax({
      type: 'POST',
      url: this.api.CONST_BASE_URL+'token',
      data: loginData
    }).done(function (data) {
      console.log(data.userName);
      console.log(data.access_token);
      console.log(JSON.stringify(data));
      window.localStorage.setItem(this.CONST_TOKEN_NAME, data.token);
    }).fail();*/
  }

  logout(){
    this._currentUser = null;
    window.localStorage.removeItem(this.CONST_TOKEN_NAME);
  }

  get isAuthenticated(): boolean {
    return this.currentUser === true;
  }

  get currentUser(): UserModel | boolean{
    if (this._currentUser){
      return this._currentUser;
    }

    const token: string = window.localStorage.getItem(this.CONST_TOKEN_NAME);
    if (!token){
      return false;
    }

    let decodedToken: object = {};
    try {
      decodedToken = jwt(token);
    } catch(e) {
      console.log(e);
      return false;
    }

    if (decodedToken['exp'] < Math.trunc(new Date().getTime() / 1000)) {
      return false;
    }

    this._currentUser = new UserModel();
    this._currentUser.email = decodedToken['sub'];

  }
}
