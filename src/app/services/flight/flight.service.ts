import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Flight} from '../../models/flight'
import { Subject } from 'rxjs/Subject';
import { AppConfig } from '../../app.config';
@Injectable()
export class FlightService {
  private config: AppConfig = new AppConfig();

  constructor(public http: HttpClient) { 

  }

  getFlights(): Observable<any>{
    return this.http.get<Flight>(this.config.apiUrl + '/api/flight');
  }

  addFlight(flight: Flight):Observable<any>{   

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     
    return this.http.post(this.config.apiUrl + '/api/flight' ,  JSON.stringify(flight),{headers:headers});
  }

  deleteFlight(flightNumber: string){

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let params = new HttpParams();
    params = params.append('id', flightNumber);

   return this.http.delete(this.config.apiUrl + '/api/flight',{headers:headers, params: params});
  }

}
