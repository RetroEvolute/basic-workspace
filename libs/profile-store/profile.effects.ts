import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ProfileService } from './profile.service';
import * as ProfileActions from './profile.actions';
import { UserProfile } from '../feature-profile-details/src/lib/models';
import { ProfileState } from '../feature-profile-details/src/lib/models/profile-state.model';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private dataService: ProfileService) {}

  getUserProfileRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfile),
      map(() => ProfileActions.getProfileSuccess()),
      tap(ev => this.transformUserData(this.dataService.getUserProfile(1)))
      // Write code to retrieve random user from API here
      // Hint: You will need to use some rxjs operators here)
    )
  );

  transformUserData(data: object) {
    console.log(data);
    return data;
  }
}

// FYI: The response from the API will return an object with different properties than the UserProfile model.
