import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from '../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profile!: Profile;

  @Output() profileNameClicked: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    this.profileNameClicked.emit(this.profile.name);
  }
}

