import { Component, Input } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';

import { UserProfile } from '../../../../feature-profile-details/src/lib/models';

@Component({
  selector: 'monofunworkspace-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(.5rem)' }),
        animate(200)
      ])
    ])
  ]
})
export class ProfileCardComponent {
  @Input() user: UserProfile;

  constructor() {}
}
