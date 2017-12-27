import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { FlightEditComponent } from './flight/flight-edit/flight-edit.component';
import {FlightListComponent} from './flight/flight-list/flight-list.component'

import {AppRoutingModule} from "./routing/app-routing.module";

import {FlightService} from "./services/flight/flight.service";

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    HeaderComponent,
    BookingComponent,
    FlightEditComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
