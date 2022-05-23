import { TestBed } from '@angular/core/testing';

import { SupplyDataServiceService } from './supply-data-service.service';

describe('SupplyDataServiceService', () => {
  let service: SupplyDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
