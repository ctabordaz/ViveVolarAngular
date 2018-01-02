import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input() bookings: Booking[]
  constructor() { }

  ngOnInit() {
  }

  deleteFlight(bookingId: string, index: number){
    console.log(bookingId);
  }

}
