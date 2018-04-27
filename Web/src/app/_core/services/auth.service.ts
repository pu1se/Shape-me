import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {ApiService} from "./api.service";
import {Router} from '@angular/router';
import * as jwt from 'jwt-decode';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  private _currentUser: UserModel;
  public CONST_BASE_URL = 'http://localhost:63866/api/';
  private CONST_TOKEN_NAME = 'shape_me_token';
  private CONST_USER_NAME = 'shape_me_username';
  private CONST_EXPIRES = 'shape_me_expires';

  constructor(private http: HttpClient, private router: Router){}

  login(email: string, password: string){

    const body = new HttpParams()
      .set('username', email)
      .set('grant_type', 'password')
      .set('password', password);

    try{
      this.http.post(this.CONST_BASE_URL+'token', body.toString()).subscribe(
        response => {

          localStorage.setItem(this.CONST_TOKEN_NAME, response["access_token"]);
          localStorage.setItem(this.CONST_USER_NAME, response['userName']);
          localStorage.setItem(this.CONST_EXPIRES, response['.expires']);
          this.router.navigate(['/']);

        });
    }catch (ex){
      console.log(ex);
    }


  }

  logout(){

    let headers = new HttpHeaders();

    headers = headers
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    if (this.isAuthenticated) {
      let token = this.currentUserToken;
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    this.http.post(this.CONST_BASE_URL+'Account/Logout',{}, {headers: headers});

    this._currentUser = null;
    localStorage.removeItem(this.CONST_TOKEN_NAME);
    localStorage.removeItem(this.CONST_USER_NAME);
    localStorage.removeItem(this.CONST_EXPIRES);

    this.router.navigate(['/']);
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

  get currentUserToken(): string {
    return localStorage.getItem(this.CONST_TOKEN_NAME);
  }
}
