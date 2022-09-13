import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';
import { GithubApiService } from '../github-api.service';
import { Profile } from '../types';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit, OnDestroy {

  profiles: Profile[] = [];

  searchKeywordEmitterSubscription!: Subscription;

  constructor(private api: GithubApiService, private commonService: CommonService) {}

  ngOnInit(): void {
    this.api.listUsers()
      .then(profiles => this.profiles = profiles)
      .catch(console.error);

    this.searchKeywordEmitterSubscription = this.commonService.searchKeywordEmitter.subscribe((keyword: string) => {
      let usersPromise: Promise<Profile[]>;
      if (keyword) {
        usersPromise = this.api.searchUsers(keyword);
      } else {
        usersPromise = this.api.listUsers();
      }

      usersPromise
        .then(profiles => this.profiles = profiles)
        .catch(console.error);
    });
  }

  ngOnDestroy(): void {
    this.searchKeywordEmitterSubscription.unsubscribe();
  }
}
