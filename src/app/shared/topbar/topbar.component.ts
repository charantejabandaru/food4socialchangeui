import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchRequest } from '../searchRequest';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  searchTerm = new FormControl();
  constructor(private searchService : SearchService,private router : Router) { }

  ngOnInit(): void {
  }

  search() : void {
    if(this.searchTerm.value !=null && this.searchTerm.value.length > 0) {
      let searchRequest = new SearchRequest(this.searchTerm.value);
      this.searchService.searchProducts(searchRequest).subscribe(response => {
        let searchResults  = encodeURIComponent(JSON.stringify(response));
        this.router.navigate(['/search-results'], { queryParams: {searchResults : searchResults}});
      },error => {
        console.log("An Error Occured"+error)
      });
    }
  }
}
