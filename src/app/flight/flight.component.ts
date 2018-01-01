import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight/flight.service'
import { Flight } from '../models/flight';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../services/message/message.service';
import { AlertService } from '../services/alert/alert.service';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  
  flights: Flight[];
  subscription : Subscription;
  typeList: string = "Admin"
  

  constructor(private flightService: FlightService, private messageService: MessageService, private alertService: AlertService) { }

  ngOnInit() {
    this.flightService.getFlights()
    .subscribe(data =>{ 
        this.flights = data;
      }
      , (error: any)=>{
        this.alertService.error("Ha ocurrido un error trayendo los vuelos");
        console.log(error);
      });
    
    this.messageService.listen().subscribe(
      (flight:any) =>{
      this.flights.push(flight);
      }, (error: any)=>{
        this.alertService.error(error._body);
        console.log(error);
      });
  }


}
