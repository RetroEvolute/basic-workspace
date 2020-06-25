import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ProfileActions from '../../../../profile-store/profile.actions';

@Component({
  selector: 'monofunworkspace-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
  // implements OnInit?
  profile$ = this.store.pipe(select(state => state.ProfileState));

  constructor(private store: Store<any>) {
    // this.store.dispatch(ProfileActions.getProfile());
  }
}
