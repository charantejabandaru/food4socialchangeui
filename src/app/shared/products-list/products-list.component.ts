import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../products.service';
import { Product } from '../product.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products : Product[] = [];
  public isLoading : boolean  = false;
  public error : string = '';

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void{
    this.isLoading = true;
    this.error = '';

    this.productsService.getProducts()
      .pipe(
        catchError((error) => {
          this.error = 'Failed to load products. Please try again later.';
          return throwError(error);
        })
      )
      .subscribe(
        (products) => {
          this.products = products;
          this.isLoading = false;
        }
      );
  }
}
