import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { FlightEditComponent } from './flight/flight-edit/flight-edit.component';
import {FlightListComponent} from './flight/flight-list/flight-list.component'

import {AppRoutingModule} from "./routing/app-routing.module";

import {FlightService} from "./services/flight/flight.service";
import { MessageService } from './services/message/message.service';
import { AlertService } from './services/alert/alert.service';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard} from './services/auth/auth.guard.service';
import { LoginComponent } from './login/login.component'
import { AuthenticationService} from './services/auth/authentication.service';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './search/filter/filter.component';
import { BookingService } from './services/booking/booking.service';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { RegisterComponent } from './register/register.component';
import { MenuGuard } from './services/auth/menu.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    HeaderComponent,
    BookingComponent,
    FlightEditComponent,
    FlightListComponent,
    AlertComponent,
    LoginComponent,
    SearchComponent,
    FilterComponent,
    BookingListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [FlightService,
              MessageService,
              AlertService,
              AuthGuard,
              AuthenticationService,
              BookingService,
              MenuGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
