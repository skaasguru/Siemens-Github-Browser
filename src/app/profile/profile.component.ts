import { Component, Input } from '@angular/core';
import { Profile } from '../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profile!: Profile;
}

