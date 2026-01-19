import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  getProducts(){
    return [
      { id: 1, name: 'Laptop', brand: 'Apple', price: 50000 },
      { id: 2, name: 'Mobile', brand: 'Samsung', price: 20000 },
      { id: 3, name: 'Headphones', brand: 'Boat', price: 3000 },
    ];
  }
}
