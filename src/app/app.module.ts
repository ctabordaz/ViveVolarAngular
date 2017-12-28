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
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlightService,
              MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
