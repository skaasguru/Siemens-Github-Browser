import { Injectable } from '@angular/core';
import { Profile } from './types';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  searchUsersCache: Record<string, Profile[]> = {};
  listUsersCache: Profile[] = [];

  async listUsers(): Promise<Profile[]> {
    if (this.listUsersCache.length > 0) return this.listUsersCache;

    const response = await fetch('https://api.github.com/users')
    const data: Profile[] = await response.json();
    this.listUsersCache = data;
    return data;
  }

  async searchUsers(keyword: string): Promise<Profile[]> {
    if (keyword in this.searchUsersCache) return this.searchUsersCache[keyword];

    const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
    const data: {items: Profile[]} = await response.json();
    this.searchUsersCache[keyword] = data.items
    return data.items;
  }
}
