import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";

@Injectable()
export class AuthService {

  private _isAuthenticated = false;
  private _currentUser: UserModel;

  login(email: string, password: string){

  }

  logout(){
    this._isAuthenticated = false;
    window.localStorage.clear();
  }

  isAuthenticated(): boolean{
    return this._isAuthenticated;
  }

}
