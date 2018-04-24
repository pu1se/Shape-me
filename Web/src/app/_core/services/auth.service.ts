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
  private CONST_USER_NAME = 'shape_me_username';
  private CONST_EXPIRES = 'shape_me_expires';

  constructor(private api: ApiService, private router: Router){}

  login(email: string, password: string){

    const body = new HttpParams()
      .set('username', email)
      .set('grant_type', 'password')
      .set('password', password);

    try{
      this.api.post('token', body.toString()).subscribe(
        data => {

          localStorage.setItem(this.CONST_TOKEN_NAME, data.access_token);
          localStorage.setItem(this.CONST_USER_NAME, data.userName);
          localStorage.setItem(this.CONST_EXPIRES, data['.expires']);
          this.router.navigate(['/']);

        });
    }catch (ex){
      console.log(ex);
    }


  }

  logout(){

    console.log('logout');
    this._currentUser = null;
    localStorage.removeItem(this.CONST_TOKEN_NAME);
    localStorage.removeItem(this.CONST_USER_NAME);
    localStorage.removeItem(this.CONST_EXPIRES);

  }

  get isAuthenticated(): boolean {

    return this.currentUser !== null;

  }

  get currentUser(): UserModel{

    if (this._currentUser){
      return this._currentUser;
    }

    if (!localStorage.getItem(this.CONST_EXPIRES)){
      return null;
    }

    const expiresDate = new Date(localStorage.getItem(this.CONST_EXPIRES));

    console.log(expiresDate)
    if (expiresDate < new Date()) {
      this.logout();
      return null;
    }

    this._currentUser = new UserModel();
    this._currentUser.email = localStorage.getItem(this.CONST_USER_NAME);

  }
}
