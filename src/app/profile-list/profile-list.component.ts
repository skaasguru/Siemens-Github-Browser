import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
    let users$: Observable<Profile[]>;
    if (keyword) {
      users$ = this.api.searchUsers(keyword);
    } else {
      users$ = this.api.listUsers();
    }

    users$.subscribe({
      next: profiles => this.profiles = profiles,
      error: err => console.error(err)
    });
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
