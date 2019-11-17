import { TestBed } from '@angular/core/testing';

import { LegislationService } from './legislation.service';

describe('LegislationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegislationService = TestBed.get(LegislationService);
    expect(service).toBeTruthy();
  });
});
