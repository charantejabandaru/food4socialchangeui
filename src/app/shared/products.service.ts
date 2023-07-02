import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from './product.model';
import { catchError } from 'rxjs/operators';
import {Observable , throwError} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private baseUrl: string = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient){}

    getProducts() : Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
    }
}