import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UserProfile } from '../../../../feature-profile-details/src/lib/models';
import * as ProfileActions from '../../../../profile-store/profile.actions';

@Component({
  selector: 'monofunworkspace-profile-listing',
  templateUrl: './profile-listing.component.html',
  styleUrls: ['./profile-listing.component.scss']
})
export class ProfileListingComponent {
  profiles$ = this.store.pipe(select(state => state.ProfilesState));

  constructor(private store: Store<any>) {
    this.store.dispatch(ProfileActions.getProfiles());
  }
}
