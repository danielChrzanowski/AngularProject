import { TestBed } from '@angular/core/testing';

import { SerwisService } from './serwis.service';

describe('SerwisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerwisService = TestBed.get(SerwisService);
    expect(service).toBeTruthy();
  });
});
