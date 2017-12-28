import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightService } from '../../services/flight/flight.service';
import { Flight } from '../../models/flight';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit , OnDestroy{
  
  flights: Flight[];
  subscription : Subscription;
  constructor(private flightService: FlightService, private messageService: MessageService) { }

  ngOnInit() {
    this.flightService.getFlights()
    .subscribe(data => this.flights = data
      , (error: any)=>{
        console.log(error);
      });
    
    this.messageService.listen().subscribe(
      (flight:any) =>{
      this.flights.push(flight);
      }, (error: any)=>{
        console.log(error);
      });
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewFlight(){
    
  }

  deleteFlight(flightNumber: string, index: number){
    this.flightService.deleteFlight(flightNumber).subscribe(
      data => {
        this.flights.splice(index,1);
      }, 
      error => console.log("no deleted"));
  }

}
