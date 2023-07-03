import {HttpClient , HttpErrorResponse,HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable , throwError} from 'rxjs';
import {Product} from './product.model';
import  {SearchRequest} from './searchRequest';
import  {SearchResponse} from './searchResponse';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private baseUrl: string = "http://localhost:8082/smartbuy/searchOndc/searchByItem";

    constructor(private http: HttpClient){}

    searchProducts(searchRequest : SearchRequest) : Observable<SearchResponse>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const params = new HttpParams().set('cityCode','Hyderabad')
                                        .set('descriptor',searchRequest.searchTerm);
        return this.http.get<SearchResponse>(this.baseUrl,{headers, params}).pipe(catchError(this.handleError));
    }
    
    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
    }
}

