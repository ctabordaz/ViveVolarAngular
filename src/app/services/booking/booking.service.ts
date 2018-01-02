import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Booking } from '../../models/booking';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookingService {

  private config: AppConfig = new AppConfig();
  constructor(public http: HttpClient) { }

  addBooking(booking: Booking):Observable<any>{
    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token ).set('Content-Type', 'application/json; charset=utf-8');      
    }else{
      headers =new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    }
    return this.http.post(this.config.apiUrl + '/api/booking' ,  JSON.stringify(booking),{headers:headers});
  }

  getBookingById(userId: string):Observable<any>{
    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token );      
    }else{
      headers = new HttpHeaders();
    }
    let params = new HttpParams();
    params = params.append('id', userId);

    return this.http.get<Booking>(this.config.apiUrl + '/api/booking/getByUser',{headers: headers, params: params});
  }

  deleteFlight(bookingid: string){
    
    let headers ;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.Token) {
      headers = new HttpHeaders().set( 'Authorization', 'Bearer ' + currentUser.Token ).set('Content-Type', 'application/json; charset=utf-8');      
    }else{
      headers =new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    }
    let params = new HttpParams();
    params = params.append('id', bookingid);

    return this.http.delete(this.config.apiUrl + '/api/booking',{headers:headers, params: params});
  }
}
