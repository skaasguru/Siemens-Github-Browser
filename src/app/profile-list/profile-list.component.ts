import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';
import { Profile } from '../types';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnChanges {

  @Input() searchKeyword: string | undefined;

  profiles: Profile[] = [];

  constructor(private api: GithubApiService) {}

  ngOnChanges(): void {
    let usersPromise: Promise<Profile[]>;
    if (this.searchKeyword) {
      usersPromise = this.api.searchUsers(this.searchKeyword);
    } else {
      usersPromise = this.api.listUsers();
    }

    usersPromise
      .then(profiles => this.profiles = profiles)
      .catch(console.error);
  }

}
