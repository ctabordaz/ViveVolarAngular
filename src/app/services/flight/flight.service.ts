import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Flight} from '../../models/flight'
import { Subject } from 'rxjs/Subject';
import { AppConfig } from '../../app.config';
import { FlightSearch } from '../../models/flightSearch';
@Injectable()
export class FlightService {
  private config: AppConfig = new AppConfig();

  constructor(public http: HttpClient) { 

  }

  getFlights(): Observable<any>{
    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token );      
    }else{
      headers = new HttpHeaders();
    }
     
    return this.http.get<Flight>(this.config.apiUrl + '/api/flight',{headers: headers});
  }

  addFlight(flight: Flight):Observable<any>{   

    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token ).set('Content-Type', 'application/json; charset=utf-8');      
    }else{
      headers =new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    }
     
    return this.http.post(this.config.apiUrl + '/api/flight' ,  JSON.stringify(flight),{headers:headers});
  }

  deleteFlight(flightNumber: string){

    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token ).set('Content-Type', 'application/json; charset=utf-8');      
    }else{
      headers =new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    }
    let params = new HttpParams();
    params = params.append('id', flightNumber);

   return this.http.delete(this.config.apiUrl + '/api/flight',{headers:headers, params: params});
  }

  searchFlights(flightSearch: FlightSearch): Observable<any>{
    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token ).set('Content-Type', 'application/json; charset=utf-8');      
    }else{
      headers =new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    }
     
    return this.http.post(this.config.apiUrl + '/api/flight/search' ,  JSON.stringify(flightSearch),{headers:headers});
  }

}
