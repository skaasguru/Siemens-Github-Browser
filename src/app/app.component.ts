import { Component } from '@angular/core';
import { Profile } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchKeyword: string | undefined;
}
