import { Action, createReducer, on } from '@ngrx/store';

import * as ProfileActions from './profile.actions';
import { UserProfile } from '../feature-profile-details/src/lib/models/profile.model';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

export const profileKey = 'profile';

export const initialState: ProfileState = {
  userProfile: null,
  userProfileList: null
};

const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getProfileSuccess, (state, { payload }) => {
    return { ...state, userProfile: payload };
  }),
  on(ProfileActions.getProfilesSuccess, (state, { profileList }) => {
    return { ...state, userProfileList: profileList };
  }),
  on(ProfileActions.resetProfile, state => {
    return { ...state, userProfile: initialState.userProfile };
  })
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}
