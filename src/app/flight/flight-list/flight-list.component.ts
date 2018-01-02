import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../../services/flight/flight.service';
import { Flight } from '../../models/flight';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../services/message/message.service';
import { AlertService } from '../../services/alert/alert.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { BookingService } from '../../services/booking/booking.service';
import { Booking } from '../../models/booking';
import { User } from '../../models/user';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit , OnDestroy{
  
    @Input('flights') flights: Flight[]; 
    @Input('type') typeList: string;
    
    subscription : Subscription;
    constructor(private flightService: FlightService, 
      private messageService: MessageService, 
      private alertService: AlertService,
      private router: Router,
      private bookingService: BookingService) { }

    ngOnInit() {    
    }

    ngOnDestroy() {
    }

    onNewFlight(){
    }

    deleteFlight(flightNumber: string, index: number){
      this.flightService.deleteFlight(flightNumber).subscribe(
        data => {
          this.flights.splice(index,1);
          this.alertService.success('Vuelo eliminado', true);
        }, 
        error => {
          console.log("no deleted");
          this.alertService.error(error._body);
        })
    }
    bookingFlight(flightNumber: string, index: number){
      if(localStorage.getItem('currentUser')){
        let currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
        let  booking : Booking = new Booking();
        booking.FlightId = flightNumber;
        booking.UserId = currentUser.Email;

        this.bookingService.addBooking(booking).subscribe(data => {
          this.alertService.success('El vuelo ha sido reservado', true);
        },
        error=>{
          this.alertService.error("Ha ocurrdo un error con la reserva");
        });

      }else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: "/search" }})
      }
    }
  }


