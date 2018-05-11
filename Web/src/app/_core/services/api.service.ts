import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {AuthService} from "./auth.service";
import { Config } from './_config';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  get(url: string, data: object = {}): Observable<any>{

    let params = new HttpParams();

    for(var i in data){
      params = params.set(i, data[i]);
    }

    return this.http.get(Config.CONST_BASE_URL+url, {params, headers: this.getHttpHeader()}).catch((err) => {

      alert(JSON.stringify(err));

      return Observable.throw(err)
    });

  }


  post(url: string, data: object = {}): Observable<any>{

    let body = new HttpParams();

    for(var i in data){
      body = body.set(i, data[i]);
    }

    return this.http.post(Config.CONST_BASE_URL+url, body, {headers:this.getHttpHeader(),responseType: 'text'}).catch((err) => {

      alert(JSON.stringify(err));

      return Observable.throw(err)
    });

  }


  public getHttpHeader(){
    let headers = new HttpHeaders();

    headers = headers
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    if (this.auth.isAuthenticated) {
      let token = this.auth.currentUserToken;
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    return headers;
  }
}
