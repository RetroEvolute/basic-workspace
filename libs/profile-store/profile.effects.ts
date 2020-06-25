import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  withLatestFrom,
  concatMap,
  catchError
} from 'rxjs/operators';

import * as ProfileActions from './profile.actions';
import * as fromProfile from './profile.reducers';
import { ProfileService } from './profile.service';
import { UserProfile } from '../feature-profile-details/src/lib/models/profile.model';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

@Injectable()
export class ProfileEffects {
  getUserProfileRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfile),
      concatMap(action =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(fromProfile.profileKey),
              map((res: ProfileState) => res)
            )
          )
        )
      ),
      switchMap(([{ userId }, { userProfileList }]) => {
        const userIndex =
          userProfileList &&
          userProfileList.findIndex(user => user.id === userId);
        if (userIndex) {
          return of(
            ProfileActions.getProfileSuccess({
              payload: userProfileList[userIndex]
            })
          );
        } else {
          return this.handleGetUserProfile(userId);
        }
      })
    )
  );

  getProfilesRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfiles),
      switchMap(() => {
        return this.profileService.getUserProfiles().pipe(
          map((users: UserProfile[]) =>
            ProfileActions.getProfilesSuccess({ profileList: users })
          ),
          catchError(error => of(ProfileActions.getProfilesError(error)))
        );
      })
    )
  );

  getRandomUserProfileRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getRandomProfile),
      switchMap(() => {
        const random = Math.floor(
          Math.random() * this.profileService.maxResults
        );
        return this.handleGetUserProfile(random);
      })
    )
  );

  private handleGetUserProfile(userId: number) {
    return this.profileService.getUserProfiles(userId).pipe(
      map((users: UserProfile[]) =>
        ProfileActions.getProfileSuccess({ payload: users[0] })
      ),
      catchError(error => of(ProfileActions.getProfileError(error)))
    );
  }

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private profileService: ProfileService
  ) {}
}
