import { Component, Input } from '@angular/core';
import { UserProfile } from '../../../../feature-profile-details/src/lib/models';

@Component({
  selector: 'monofunworkspace-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() user: UserProfile;

  constructor() {}
}
