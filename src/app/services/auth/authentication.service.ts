import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable()
export class AuthenticationService {
  private config: AppConfig = new AppConfig();

  constructor(private http: HttpClient) { }

  login(username: string, password: string):Observable<any> {
    let user = new User();
    user.Email = username;
    user.Password = password;
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');    
    return this.http.post(this.config.apiUrl + '/api/user/auth', JSON.stringify(user),{headers:headers});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  } 

}
