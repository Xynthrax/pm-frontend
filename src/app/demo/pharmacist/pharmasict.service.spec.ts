import { TestBed } from '@angular/core/testing';

import { PharmasictService } from './pharmasict.service';

describe('PharmasictService', () => {
  let service: PharmasictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmasictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
