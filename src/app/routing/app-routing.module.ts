import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FlightComponent} from '../flight/flight.component';
import {BookingComponent} from '../booking/booking.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/flight', pathMatch: 'full' },
  { path: 'flight', component: FlightComponent },
  { path: 'booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
