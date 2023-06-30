import { Product } from "./product.model";

export class SearchResponse{
    products : Product[];

    constructor(products: Product[]){
        this.products = products;
    }
}