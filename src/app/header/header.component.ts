import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = new FormControl('');

  constructor(public commonService: CommonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(qp => this.keyword.setValue(qp['keyword'] || ''));
    this.keyword.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe(value => this.commonService.searchKeywordEmitter.emit(value ?? ''));
  }
}
