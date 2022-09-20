import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  mystring = 'aNguLar wOrKs';
  mydate = Date.now();
  myamount = 123456;

  constructor() { }

  ngOnInit(): void {
  }

}
