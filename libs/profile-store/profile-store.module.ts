import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProfile from './profile.reducers';

@NgModule({
  imports: [StoreModule.forFeature(fromProfile.profileKey, fromProfile.reducer)]
})
export class ProfileStoreModule {}
