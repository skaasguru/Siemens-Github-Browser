import { Component } from '@angular/core';
import { Profile } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angularsProfile: Profile = JSON.parse(`{
    "login": "angular",
    "id": 139426,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
    "avatar_url": "https://avatars.githubusercontent.com/u/139426?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/angular",
    "html_url": "https://github.com/angular",
    "followers_url": "https://api.github.com/users/angular/followers",
    "following_url": "https://api.github.com/users/angular/following{/other_user}",
    "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
    "organizations_url": "https://api.github.com/users/angular/orgs",
    "repos_url": "https://api.github.com/users/angular/repos",
    "events_url": "https://api.github.com/users/angular/events{/privacy}",
    "received_events_url": "https://api.github.com/users/angular/received_events",
    "type": "Organization",
    "site_admin": false,
    "name": "Angular",
    "company": null,
    "blog": "https://angular.io",
    "location": "United States of America",
    "email": "angular@angular.io",
    "hireable": null,
    "bio": null,
    "twitter_username": "angular",
    "public_repos": 201,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2009-10-13T22:16:19Z",
    "updated_at": "2022-06-29T18:58:06Z"
  }`);

  eventReceivedFromChild(event: string) {
    alert(`You've clicked the Profile with the name "${event}"`);
  }

  eventReceivedFromSearch(event: string) {
    alert(`You've searched for "${event}"`);
  }
}
