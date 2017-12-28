import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor( private alertService: AlertService) { }

  ngOnInit() {
  }

}
