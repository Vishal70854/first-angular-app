import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product-service';
interface ProductModel {
  id: number;
  name: string;
  brand: string;
  price: number;
}

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
   products: any;

  // constructor will call the ProductService and get list of products
  // (Dependency Injection is handled by Angular as ProductService has @Injectable which makes it visible to all the components in the application)
  
  constructor(service : ProductService){
    this.products = service.getProducts();
   }
}
