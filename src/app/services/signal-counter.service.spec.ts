import { TestBed } from '@angular/core/testing';

import { SignalCounterService } from './signal-counter.service';

describe('SignalCounterService', () => {
  let service: SignalCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
