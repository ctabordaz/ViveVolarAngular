import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FlightComponent} from '../flight/flight.component';
import {BookingComponent} from '../booking/booking.component';
import {LoginComponent} from '../login/login.component'
import { AuthGuard } from '../services/auth/auth.guard.service';
import { SearchComponent } from '../search/search.component';
import { RegisterComponent } from '../register/register.component';
import { MenuGuard } from '../services/auth/menu.guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'flight', component: FlightComponent, canActivate: [AuthGuard,MenuGuard]  },
  { path: 'booking', component: BookingComponent,canActivate: [AuthGuard,MenuGuard] },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
