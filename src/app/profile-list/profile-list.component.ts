import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private api: GithubApiService,
    private commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    this.getUsers(queryParams['keyword'] || '');

    this.searchKeywordEmitterSubscription = this.commonService.searchKeywordEmitter.subscribe((keyword: string) => {
      this.updateQueryParam({keyword})
      this.getUsers(keyword);
    });
  }

  getUsers(keyword: string): void {
    let usersPromise: Promise<Profile[]>;
    if (keyword) {
      usersPromise = this.api.searchUsers(keyword);
    } else {
      usersPromise = this.api.listUsers();
    }

    usersPromise
      .then(profiles => this.profiles = profiles)
      .catch(console.error);
  }

  updateQueryParam(queryParams: Record<string, string>) {
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // Remove to replace all query params by provided
      }
    );
  }

  ngOnDestroy(): void {
    this.searchKeywordEmitterSubscription.unsubscribe();
  }
}
