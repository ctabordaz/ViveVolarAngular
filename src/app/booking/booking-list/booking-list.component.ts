import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../models/booking';
import { AlertService } from '../../services/alert/alert.service';
import { BookingService } from '../../services/booking/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input() bookings: Booking[]
  
  constructor( private alertService: AlertService,
    private bookingService:BookingService) { }

  ngOnInit() {
  }

  deleteFlight(bookingId: string, index: number){
    this.bookingService.deleteFlight(bookingId).subscribe(
      data => {
        this.bookings.splice(index,1);
        this.alertService.success('Reserva eliminada', true);
      },
      error=>{
        this.alertService.error("Error eliminando la reserva");
      }
    );
  }

}
