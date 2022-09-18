import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GithubApiService } from './github-api.service';
import { ProfileDetail } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailResolver implements Resolve<ProfileDetail> {

  constructor(private api: GithubApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProfileDetail> {
    const login: string = route.paramMap.get('login') || '';
    console.log('Loading ' + login);
    return this.api.getUserDetails(login);
  }
}
