import { TestBed } from '@angular/core/testing';

import { ImperativeCounterService } from './imperative-counter.service';

describe('ImperativeCounterService', () => {
  let service: ImperativeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImperativeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
