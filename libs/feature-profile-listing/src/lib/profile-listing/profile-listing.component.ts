import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { UserProfile } from '../../../../feature-profile-details/src/lib/models';
import { ProfileState } from '../../../../feature-profile-details/src/lib/models/profile-state.model';
import * as ProfileActions from '../../../../profile-store/profile.actions';
import { profileKey } from '../../../../profile-store/profile.reducers';

@Component({
  selector: 'monofunworkspace-profile-listing',
  templateUrl: './profile-listing.component.html',
  styleUrls: ['./profile-listing.component.scss']
})
export class ProfileListingComponent implements OnInit, OnDestroy {
  userProfileListSelector$: Observable<ProfileState>;
  userProfileListSelectorSubscription: Subscription;
  userProfileList: UserProfile[] = null;

  constructor(private store: Store<any>, private router: Router) {
    this.userProfileListSelector$ = store.select(profileKey);
    store.dispatch(ProfileActions.getProfiles());
  }

  ngOnInit() {
    this.userProfileListSelectorSubscription = this.userProfileListSelector$.subscribe(
      profileState => (this.userProfileList = profileState.userProfileList)
    );
  }

  ngOnDestroy() {
    this.userProfileListSelectorSubscription.unsubscribe();
  }

  handleProfileSelection(userId) {
    this.router.navigate(['/profile-details', userId]);
  }
}
