import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  listUsers(): Observable<Profile[]> {
    if (this.listUsersCache.length > 0) return of(this.listUsersCache);
    return this.http.get<Profile[]>(`${this.apiPrefix}/users`)
      .pipe(
        tap(profile => this.listUsersCache = profile)
      );
  }

  searchUsers(keyword: string): Observable<Profile[]> {
    if (keyword in this.searchUsersCache) return of(this.searchUsersCache[keyword]);

    return this.http.get<{items: Profile[]}>(`${this.apiPrefix}/search/users`, {
      params: {
        q: keyword
      }
    }).pipe(
      map(x => x.items),
      tap(profile => this.searchUsersCache[keyword] = profile)
    );
  }

  getUserDetails(login: string): Observable<ProfileDetail> {
    if (login in this.getUserDetailsCache) return of(this.getUserDetailsCache[login]);
    return this.http.get<ProfileDetail>(`${this.apiPrefix}/users/${login}`)
      .pipe(
        tap(profileDetail => this.getUserDetailsCache[login] = profileDetail)
      );
  }
}
