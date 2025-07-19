import { TestBed } from '@angular/core/testing';

import { FavoriteDisksService } from './favorite-disks.service';

describe('FavoriteDisksService', () => {
  let service: FavoriteDisksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteDisksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
