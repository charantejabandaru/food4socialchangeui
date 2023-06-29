import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products : Product[] = [];

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products  => this.products = products);
  }

}
