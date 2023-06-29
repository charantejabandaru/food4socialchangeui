import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private baseUrl: string = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient){}

    getProducts() : Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl);
    }
}