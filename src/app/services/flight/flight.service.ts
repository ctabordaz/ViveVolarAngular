import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     
    return this.http.post(this.url , json,{headers:headers});
  }

  deleteFlight(flightNumber: string){

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let params = new HttpParams();
    params = params.append('id', flightNumber);

   return this.http.delete(this.url,{headers:headers, params: params});
  }

}
