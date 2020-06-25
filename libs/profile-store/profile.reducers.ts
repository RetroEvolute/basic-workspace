import { Action, createReducer, on } from '@ngrx/store';

import * as ProfileActions from './profile.actions';
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
  on(ProfileActions.getProfileError, state => {
    return { ...state, userProfile: initialState.userProfile };
  }),
  on(ProfileActions.getProfilesSuccess, (state, { profileList }) => {
    return { ...state, userProfileList: profileList };
  }),
  on(ProfileActions.getProfilesError, state => {
    return { ...state, userProfileList: initialState.userProfileList };
  }),
  on(ProfileActions.resetProfile, state => {
    return { ...state, userProfile: initialState.userProfile };
  }),
  on(ProfileActions.resetProfiles, state => {
    return { ...state, userProfileList: initialState.userProfileList };
  })
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}
