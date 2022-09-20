import { TestBed } from '@angular/core/testing';

import { ProfileDetailResolver } from './profile-detail.resolver';

describe('ProfileDetailResolver', () => {
  let resolver: ProfileDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
