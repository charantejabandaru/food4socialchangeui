import {  Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { NotifySearchResultService } from '../notify-search-result.service';
import { SearchResponse } from '../searchResponse';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

  public products : Product[] = [];

  constructor(private notifySearchResultService : NotifySearchResultService) {
  }

  ngOnInit(): void {
    console.log('Displaying search Results');
    this.notifySearchResultService.searchResult.subscribe((searchResponse: SearchResponse)=> this.products = searchResponse.products);
  }
}
