import { TestBed } from '@angular/core/testing';

import { PositionService as PositionService } from './position.service';

describe('PositionServiceService', () => {
  let service: PositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
