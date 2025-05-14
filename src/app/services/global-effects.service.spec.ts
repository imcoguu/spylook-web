import { TestBed } from '@angular/core/testing';

import { GlobalEffectsService } from './global-effects.service';

describe('GlobalEffectsService', () => {
  let service: GlobalEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
