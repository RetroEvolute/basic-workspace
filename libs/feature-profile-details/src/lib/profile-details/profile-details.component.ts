import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import * as ProfileActions from '../../../../profile-store/profile.actions';
import { profileKey } from '../../../../profile-store/profile.reducers';
import { UserProfile } from '../models';
import { ProfileState } from '../models/profile-state.model';

@Component({
  selector: 'monofunworkspace-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  userProfileSelector$: Observable<ProfileState>;
  userProfile: UserProfile = null;
  userProfileSelectorSubscription: Subscription;

  constructor(private store: Store<any>, activatedroute: ActivatedRoute) {
    this.userProfileSelector$ = store.select(profileKey);

    const userId = Number(activatedroute.snapshot.params.id);
    if (!userId) {
      store.dispatch(ProfileActions.getRandomProfile());
    } else {
      store.dispatch(ProfileActions.getProfile({ userId }));
    }
  }

  ngOnInit() {
    this.userProfileSelectorSubscription = this.userProfileSelector$.subscribe(
      profileState => (this.userProfile = profileState.userProfile)
    );
  }

  ngOnDestroy() {
    this.userProfileSelectorSubscription.unsubscribe();
    this.store.dispatch(ProfileActions.resetProfile());
  }
}
