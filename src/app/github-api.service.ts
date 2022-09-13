import { Injectable } from '@angular/core';
import { Profile } from './types';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  async listUsers(): Promise<Profile[]> {
    const response = await fetch('https://api.github.com/users')
    const data: Profile[] = await response.json();
    return data;
  }

  async searchUsers(keyword: string): Promise<Profile[]> {
    const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
    const data: {items: Profile[]} = await response.json();
    return data.items;
  }
}
