import { async, TestBed } from '@angular/core/testing';
import { FeatureProfileListingModule } from './feature-profile-listing.module';

describe('FeatureProfileListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureProfileListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProfileListingModule).toBeDefined();
  });
});
