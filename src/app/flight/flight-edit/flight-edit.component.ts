import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import {Flight} from '../../models/flight';
import { FlightService } from '../../services/flight/flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
 
  public flightForm: FormGroup;
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    let flightId = "";
    let flightDate = new Date();
    let sourceCity = "";
    let destinationCity ="";
    let chairs = 1;
    this.flightForm = new FormGroup({
      'flightId' : new FormControl(flightId, Validators.required),
      'flightDate' : new FormControl(flightDate, Validators.required),
      'sourceCity' : new FormControl(sourceCity, Validators.required),
      'destinationCity' : new FormControl(destinationCity, Validators.required),
      'chairs' : new FormControl(chairs, Validators.required),
    });
  }

  onSubmit() {
      this.flightService.addFlight(this.flightForm.value);
  }

}
