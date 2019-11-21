import { TestBed } from '@angular/core/testing';

import { ConstituenciesService } from './constituencies.service';

describe('ConstituenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstituenciesService = TestBed.get(ConstituenciesService);
    expect(service).toBeTruthy();
  });
});
