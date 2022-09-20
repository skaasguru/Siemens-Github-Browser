import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';
import { ProfileDetail } from '../types';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profileDetail: ProfileDetail | undefined;

  constructor(
    private api: GithubApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.profileDetail = this.activatedRoute.snapshot.data['profileDetail'];
  }
}
