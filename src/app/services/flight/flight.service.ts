import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Flight} from '../../models/flight'
import { Subject } from 'rxjs/Subject';
@Injectable()
export class FlightService {
  public flightschanged = new Subject<Flight[]>();

  private flightList : Flight[] = [];
  private url = "http://localhost:64207/api/flight";

  constructor(public http: HttpClient) { 

  }

  getFlights(): Observable<any>{
    return this.http.get<Flight>(this.url);
  }

  addFlight(flight: Flight):Observable<any>{
    

    let json = JSON.stringify(flight);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Accept', 'application/json');
     
    return this.http.post(this.url , json,{headers:headers});
  }


  



}
