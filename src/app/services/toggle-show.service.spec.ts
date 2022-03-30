import { TestBed } from '@angular/core/testing';

import { ToggleShowService } from './toggle-show.service';

describe('UiService', () => {
  let service: ToggleShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
