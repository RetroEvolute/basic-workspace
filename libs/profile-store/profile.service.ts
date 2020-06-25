// Use the random user generator API found here: https://randomuser.me/ to retrieve data for your services.
// Further documentation for implementation can be found here: https://randomuser.me/documentation#format

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UserProfile } from '../feature-profile-details/src/lib/models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  readonly maxResults = 15;

  private options: { [key: string]: string } = {
    inc: 'picture,name,email,phone,cell,location',
    noinfo: 'true',
    results: String(this.maxResults),
    seed: 'scorpiontest'
  };

  getUserProfiles(userId = null) {
    return this.httpClient
      .get('https://randomuser.me/api', { params: this.options })
      .pipe(
        map(({ results }: { results: any[] }) =>
          results
            .map(this.formatProfile)
            .filter(user => (userId !== null ? user.id === userId : true))
        )
      );
  }

  formatProfile(user: any, index: number): UserProfile {
    return {
      id: Number(index) + 1,
      firstName: user.name.first,
      lastName: user.name.last,
      city: user.location.city,
      state: user.location.state,
      email: user.email,
      phone: user.phone,
      cell: user.cell,
      pictureUrl: user.picture.thumbnail
    };
  }
}
