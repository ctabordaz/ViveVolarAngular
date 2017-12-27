import { TestBed, inject } from '@angular/core/testing';

import {  FlightService} from './flight.service';

describe('FlightServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightService]
    });
  });

  it('should be created', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));
});
