import { TestBed } from '@angular/core/testing';

import { ObservService } from './observ.service';

describe('ObservService', () => {
  let service: ObservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
