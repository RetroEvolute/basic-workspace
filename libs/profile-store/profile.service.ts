// Use the random user generator API found here: https://randomuser.me/ to retrieve data for your services.
// Further documentation for implementation can be found here: https://randomuser.me/documentation#format

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getUserProfile(num: number) {
    const url =
      'https://randomuser.me/api?inc=picture,name,email,phone,cell,location,id&seed=scorpiontest&noinfo&results=' +
      num;
    return this.httpClient.get(url);
  }
}
