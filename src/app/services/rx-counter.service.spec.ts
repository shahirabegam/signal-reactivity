import { TestBed } from '@angular/core/testing';

import { RxCounterService } from './rx-counter.service';

describe('RxCounterService', () => {
  let service: RxCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
