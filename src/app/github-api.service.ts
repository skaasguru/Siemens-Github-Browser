import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile, ProfileDetail } from './types';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private apiPrefix: string = environment.API_BASE;

  private searchUsersCache: Record<string, Profile[]> = {};
  private listUsersCache: Profile[] = [];
  private getUserDetailsCache: Record<string, ProfileDetail> = {};

  async listUsers(): Promise<Profile[]> {
    if (this.listUsersCache.length > 0) return this.listUsersCache;

    const response = await fetch(`${this.apiPrefix}/users`)
    const data: Profile[] = await response.json();
    this.listUsersCache = data;
    return data;
  }

  async searchUsers(keyword: string): Promise<Profile[]> {
    if (keyword in this.searchUsersCache) return this.searchUsersCache[keyword];

    const response = await fetch(`${this.apiPrefix}/search/users?q=${keyword}`)
    const data: {items: Profile[]} = await response.json();
    this.searchUsersCache[keyword] = data.items
    return data.items;
  }

  async getUserDetails(login: string): Promise<ProfileDetail> {
    if (login in this.getUserDetailsCache) return this.getUserDetailsCache[login];
    
    const response = await fetch(`${this.apiPrefix}/users/${login}`)
    const data: ProfileDetail = await response.json();
    this.getUserDetailsCache[login] = data
    return data;
  }
}
