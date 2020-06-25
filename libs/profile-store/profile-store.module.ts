import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromProfile from './profile.reducers';

@NgModule({
  imports: [StoreModule.forFeature(fromProfile.profileKey, fromProfile.reducer)]
})
export class ProfileStoreModule {}
