import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  private config: AppConfig = new AppConfig();

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');    
    return this.http.post(this.config.apiUrl + '/user/auth', { email: username, password: password },{headers:headers});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  } 

}
