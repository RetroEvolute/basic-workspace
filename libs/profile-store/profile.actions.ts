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
export const getProfileError = createAction(
  '[Profile Details Component] Error receiving user profile',
  props<{ error: Error }>()
);
export const getProfiles = createAction(
  '[Profile Listing Component] Get user listing request'
);
export const getProfilesSuccess = createAction(
  '[Profile Listing Component] Successfully received user list request',
  props<{ profileList: UserProfile[] }>()
);
export const getProfilesError = createAction(
  '[Profile List Component] Error receiving user profile list',
  props<{ error: Error }>()
);
export const getRandomProfile = createAction(
  '[Profile Details Component] Get random user profile request'
);
export const resetProfile = createAction(
  '[Profile Details Component] Reset profile'
);
export const resetProfiles = createAction(
  '[Profile List Component] Reset profile list'
);
