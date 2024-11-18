import { TestBed } from '@angular/core/testing';

import { SquadBuilderService } from './squad-builder.service';

describe('SquadBuilderService', () => {
  let service: SquadBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquadBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
