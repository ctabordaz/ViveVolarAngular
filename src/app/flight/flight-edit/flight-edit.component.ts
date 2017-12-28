import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import {Flight} from '../../models/flight';
import { FlightService } from '../../services/flight/flight.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
 
  public flightForm: FormGroup;
  constructor(private flightService: FlightService, private messageService: MessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    let flightId = "";
    let flightDate = new Date();
    let sourceCity = "";
    let destinationCity ="";
    let chairs = 1;
    let price = 0;
    let userId = "camilo@taborda.co";

    this.flightForm = new FormGroup({
      'FlightNumber' : new FormControl(flightId, Validators.required),
      'Date' : new FormControl(flightDate, Validators.required),
      'SourceCity' : new FormControl(sourceCity, Validators.required),
      'DestinationCity' : new FormControl(destinationCity, Validators.required),
      'Chairs' : new FormControl(chairs, Validators.required),
      'Price' : new FormControl(price, Validators.required),
      'UserId' : new FormControl(userId, Validators.required),
    });
  }

  onSubmit() {
      this.flightService.addFlight(this.flightForm.value).subscribe(data => {
        console.log("done!");
        this.messageService.recive(data);

      });
  }

}
