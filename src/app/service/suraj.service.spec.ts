import { TestBed } from '@angular/core/testing';

import { SurajService } from './suraj.service';

describe('SurajService', () => {
  let service: SurajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
