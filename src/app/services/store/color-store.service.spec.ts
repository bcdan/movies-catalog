import { TestBed } from '@angular/core/testing';

import { ColorStoreService } from './color-store.service';

describe('ColorStoreService', () => {
  let service: ColorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
