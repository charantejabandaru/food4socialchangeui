import { Injectable, EventEmitter } from '@angular/core';
import { SearchResponse } from './searchResponse';

@Injectable({
  providedIn: 'root'
})
export class NotifySearchResultService {

  searchResult = new EventEmitter<SearchResponse>();
  constructor() { }

  triggerSearchResultReady(searchResponse : SearchResponse){
    console.log('triggerSearchPerformed called', searchResponse);
    this.searchResult.emit(searchResponse);
  }
}
