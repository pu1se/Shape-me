import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {AuthService} from "./auth.service";


@Injectable()
export class ApiService {

  public CONST_BASE_URL = 'http://localhost:63866/api/';

  constructor(private http: HttpClient, private auth: AuthService) { }


  get(url: string, params: object = {}): Observable<any>{

    return this.request('get', url, params);

  }


  post(url: string, params: object = {}): Observable<any>{

    return this.request('post', url, {}, params);

  }


  private request(method: string, url: string, urlParams: object = {}, body: object = {}): Observable<any>{
    const httpRequestParams = this.getHttpParams(body, urlParams);
    return this.http.request(method, this.CONST_BASE_URL +url, httpRequestParams);
  }


  private getHttpParams(body: object, urlParams: object) {
    let parameters = Object.keys(urlParams)
      .reduce((httpParams, param) => httpParams.set(param, urlParams[param]), new HttpParams());

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

    const result = { body, headers, params: parameters };
    return result;
  }
}
