import { TestBed } from '@angular/core/testing';

import { TripsServiceService } from './trips-service.service';

describe('TripsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripsServiceService = TestBed.get(TripsServiceService);
    expect(service).toBeTruthy();
  });
});
