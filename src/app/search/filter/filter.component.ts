import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Flight } from '../../models/flight';
import { FlightSearch } from '../../models/flightSearch';
import { FlightService } from '../../services/flight/flight.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public flightForm: FormGroup; 
  @Output() searchEvent = new EventEmitter<FlightSearch>();

  constructor() { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    
    let flightDate = new Date();
    let sourceCity = "";
    let destinationCity ="";
    let chairs = 1;
    
    

    this.flightForm = new FormGroup({      
      'InitDate' : new FormControl(flightDate, Validators.required),
      'EndDate' : new FormControl(flightDate, Validators.required),
      'SourceCity' : new FormControl(sourceCity, Validators.required),
      'DestinationCity' : new FormControl(destinationCity, Validators.required),
      'Chairs' : new FormControl(chairs, Validators.required)     
      
    });

  }
  onSubmit(){
    this.searchEvent.emit(this.flightForm.value);
  }
}
