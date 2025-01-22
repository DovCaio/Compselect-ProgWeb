import { TestBed } from '@angular/core/testing';

import { EditService } from './event.service';

describe('EditService', () => {
  let service: EditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
