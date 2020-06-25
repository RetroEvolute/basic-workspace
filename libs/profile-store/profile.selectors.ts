import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { profileKey } from './profile.reducers';

export const getUserProfileState = createFeatureSelector<ProfileState>(
  profileKey
);

export const getUserProfile = createSelector(
  getUserProfileState,
  ({ userProfile }) => {
    return userProfile;
  }
);
