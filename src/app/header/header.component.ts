import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @Output() searchSubmitted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInput!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.searchInput);
  }
}
