import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ProfileDetailResolver } from './profile-detail.resolver';

describe('ProfileDetailResolver', () => {
  let resolver: ProfileDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    resolver = TestBed.inject(ProfileDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
