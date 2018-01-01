import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightService } from '../services/flight/flight.service';
import { AlertService } from '../services/alert/alert.service';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  flights: Flight[]=[];
  typeList: string = "Admin"
  constructor(private flightService: FlightService,  private alertService: AlertService) { }

  ngOnInit() {
    
  }

  searchFlight(event){
    this.flightService.searchFlights(event).subscribe(data => {
      this.flights = data;
    }, error => {
      this.alertService.error("Ha ocurrido un error con la busqueda");
    });
  }

  
}


