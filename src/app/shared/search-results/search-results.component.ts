import {  Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

  public products : Product[] = [];
  public noMatchingResults : string = '';
  public isLoading : boolean  = false;
  public error : string = '';

  constructor(private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.queryParams.subscribe(params => {
      try {
        const searchResults = JSON.parse(decodeURIComponent(params['searchResults']));

        if (searchResults && searchResults.products) {
          this.products = searchResults.products;
          this.isLoading = false;
          console.log('Displaying search Results', this.products);
          if (this.products.length === 0) {
            this.noMatchingResults = 'Sorry! No Matching Results';
          }
        } else {
          this.error = 'Invalid search results';
        }
      } catch (error) {
        this.error = 'Error parsing search results';
      }
    });

  }
}
