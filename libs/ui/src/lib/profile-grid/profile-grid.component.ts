import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';

import { UserProfile } from '../../../../feature-profile-details/src/lib/models';

@Component({
  selector: 'monofunworkspace-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class ProfileGridComponent {
  @Input() users: UserProfile[];
  @Output() profileSelected = new EventEmitter<number>();

  displayedColumns: string[] = ['pictureThumb', 'name', 'email'];

  constructor() {}

  goToProfile(userId: number) {
    this.profileSelected.emit(userId);
  }
}
