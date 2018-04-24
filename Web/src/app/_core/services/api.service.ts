import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ApiService {

  public CONST_BASE_URL = 'http://localhost:63866/api/';

  constructor(private http: HttpClient) { }

  get(url: string, params: object = {}): Observable<any>{
    return this.request('get', url, params);
  }

  post(url: string, params: string | object = {}): Observable<any>{
    return this.http.post(this.CONST_BASE_URL+url, params);
  }

  private request(method: string, url: string, urlParams: object = {}, body: object = {}): Observable<any>{
    const httpRequestParams = this.getHttpParams(body, urlParams);
    return this.http.request(method, this.CONST_BASE_URL +url, httpRequestParams.toString());
  }

  private getHttpParams(body: object, urlParams: object) {
    const parameters = Object.keys(urlParams)
      .reduce((httpParams, param) => httpParams.set(param, urlParams[param]), new HttpParams());

    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    });
    return { body, headers, params: parameters };
  }
}
