// product.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    // Simulate fetching product data from a server try to implement an API and use the columns like below 
    return [
      { id: 1, name: 'Natural Turmeric 1KG', price: 10, imageUrl: 'assets/images/turmeric.jpeg' },
      { id: 2, name: 'Cashews 950GMS', price: 20, imageUrl: 'assets/images/p1.jpeg' },
      { id: 3, name: 'Natural Red Chilli 1KG', price: 20, imageUrl: 'assets/images/redchilli.jpeg' },
      { id: 4, name: 'Walnuts 500GMS', price: 20, imageUrl: 'assets/images/walnuts.jpeg' },
      { id: 5, name: 'Organic Raw Honey 800ML', price: 10, imageUrl: 'assets/images/honey.jpeg' },
      { id: 6, name: 'Kashmiri Saffron 100GMS', price: 20, imageUrl: 'assets/images/saffron.jpg' },
      { id: 7, name: 'Desi cow ghee 1000ML', price: 20, imageUrl: 'assets/images/cowghee.jpeg' },
      { id: 8, name: 'Natural Saffron 120GMS', price: 20, imageUrl: 'assets/images/saffron.png' },
    ];
  }
}
