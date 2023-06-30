import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifySearchResultService } from '../shared/notify-search-result.service';
import { SearchResponse } from '../shared/searchResponse';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router,private notifySearchResultService : NotifySearchResultService) { }

  ngOnInit(): void {
    this.notifySearchResultService.searchResult.subscribe(()=> this.router.navigate(['/search-results']));
  }
}
