import { Action, createReducer, on } from '@ngrx/store';

import * as ProfileActions from './profile.actions';
import { UserProfile } from '../feature-profile-details/src/lib/models/profile.model';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

export const initialState: ProfileState = {
  userProfile: null,
  userProfileList: null
};

const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getProfile, state => {
    // Write code here
    return { ...state };
  })
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}
