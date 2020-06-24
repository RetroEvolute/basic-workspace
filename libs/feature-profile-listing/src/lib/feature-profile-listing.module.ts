import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileListingComponent } from './profile-listing/profile-listing.component';
import { UiModule } from '@monofunworkspace/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProfileListingComponent
      }
    ])
  ],
  declarations: [ProfileListingComponent]
})
export class FeatureProfileListingModule {}
