import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight/flight.service'
import { Flight } from '../models/flight';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  


  constructor() { }

  ngOnInit() {

  }


}
