import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FlightComponent} from '../flight/flight.component';
import {BookingComponent} from '../booking/booking.component';
import {LoginComponent} from '../login/login.component'
import { AuthGuard } from '../services/auth/auth.guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'flight', component: FlightComponent, canActivate: [AuthGuard]  },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
