import { TestBed } from '@angular/core/testing';

import { DebatesService } from './debates.service';

describe('DebatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebatesService = TestBed.get(DebatesService);
    expect(service).toBeTruthy();
  });
});
