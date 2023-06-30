import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import  {SearchRequest} from './searchRequest';
import  {SearchResponse} from './searchResponse';
import { NotifySearchResultService } from './notify-search-result.service';
import productsData from './data.json';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private baseUrl: string = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient, private notifySearchResultService : NotifySearchResultService){}

    searchProducts(searchRequest : SearchRequest)  : SearchResponse{
        let products : Product[] = productsData;
        let searchResponse =  new SearchResponse(products.filter(product => product.title.toLowerCase().includes(searchRequest.searchTerm.toLowerCase())));
        this.notifySearchResultService.triggerSearchResultReady(searchResponse);
        return searchResponse;
    }
}
