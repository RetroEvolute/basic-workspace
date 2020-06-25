import { createAction, props } from '@ngrx/store';

import { UserProfile } from '../feature-profile-details/src/lib/models';

export const getProfile = createAction(
  '[Profile Details Component] Get user profile request',
  props<{ userId: number; userProfileList?: UserProfile[] }>()
);
export const getProfileSuccess = createAction(
  '[Profile Details Component] Successfully received user profile',
  props<{ payload: UserProfile }>()
);
export const getProfiles = createAction(
  '[Profile Listing Component] Get user listing request'
);
export const getProfilesSuccess = createAction(
  '[Profile Listing Component] Successfully received user list request',
  props<{ profileList: UserProfile[] }>()
);
