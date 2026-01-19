import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
   products: ProductModel[] = [
    { id: 1, name: 'Laptop', brand: 'Apple', price: 50000 },
    { id: 2, name: 'Mobile', brand: 'Samsung', price: 20000 },
    { id: 3, name: 'Headphones', brand: 'Boat', price: 3000 },
  ];
}
