import {HttpClient , HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable , throwError} from 'rxjs';
import {Product} from './product.model';
import  {SearchRequest} from './searchRequest';
import  {SearchResponse} from './searchResponse';
import productsData from './data.json';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private baseUrl: string = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient){}

    searchProducts(searchRequest : SearchRequest)  : SearchResponse{
        let products : Product[] = productsData;
        let searchResponse =  new SearchResponse(this.filterProducts(products,searchRequest.searchTerm));
        return searchResponse;
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
    }

    private filterProducts(entries: Product[], searchKeyword: string): Product[] {
        const keywords = searchKeyword.toLowerCase().split(' ');
        return entries.filter((entry) => {
          const lowercaseEntry = entry.title.toLowerCase();
          return keywords.some((keyword) => lowercaseEntry.includes(keyword));
        });
    }
      
}
