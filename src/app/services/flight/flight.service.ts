import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Flight} from '../../models/flight'
import { Subject } from 'rxjs/Subject';
@Injectable()
export class FlightService {
  public flightschanged = new Subject<Flight[]>();
  private flightList : Flight[] = [];

  constructor() { 
    let fly = new Flight();
    fly.chairs = 1;
    fly.flightId = "1";
    fly.sourceCity = "mdc";
    fly.destinationCity = "nyk";
    this.flightList.push(fly);
  }

  getFlights(): Flight[]{
    return this.flightList.slice();
  }

  addFlight(flight: Flight){
    this.flightList.push(flight);
    this.flightschanged.next(this.flightList.slice());
  }



}
