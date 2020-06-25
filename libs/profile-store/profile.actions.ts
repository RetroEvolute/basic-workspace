import { createAction, props } from '@ngrx/store';

import { ProfileState } from '../feature-profile-details/src/lib/models/profile-state.model';
import { UserProfile } from '../feature-profile-details/src/lib/models';

export const getProfile = createAction(
  '[Profile Details Component] Get user profile request'
);
export const getProfileSuccess = createAction(
  '[Profile Details Component] Successfully received user profile',
  props<{ payload: UserProfile }>()
);
export const getProfiles = createAction(
  '[Profile Listing Component] Get user listing request'
);
