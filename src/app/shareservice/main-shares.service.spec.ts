import { TestBed } from '@angular/core/testing';

import { MainSharesService } from './main-shares.service';

describe('MainSharesService', () => {
  let service: MainSharesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSharesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
