import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightService } from '../../services/flight/flight.service';
import { Flight } from '../../models/flight';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit , OnDestroy{
  
  flights: Flight[];
  subscription : Subscription;
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.getFlights()
	  .subscribe(
                data => this.flights = data);
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewFlight(){
    
  }

}
