import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Profile } from '../types';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnChanges {

  @Input() searchKeyword: string | undefined;

  profiles: Profile[] = [];

  ngOnChanges(): void {
    const url = this.searchKeyword
      ? `https://api.github.com/search/users?q=${this.searchKeyword}`
      : 'https://api.github.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => this.profiles = this.searchKeyword ? data.items : data);
  }

}
