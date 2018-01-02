import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert/alert.service';
import { BookingService } from '../services/booking/booking.service';
import { Booking } from '../models/booking';
import { User } from '../models/user';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: Booking[];
  constructor( private alertService: AlertService,
    private bookingService:BookingService) { }

  ngOnInit() {
    let currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
    this.bookingService.getBookingById(currentUser.Email).subscribe(
      data => {
        this.bookings = data;
      },
      error =>{
        this.alertService.error("Ha ocurrido un error cargando las reservas")
      }
    )
  }

}
