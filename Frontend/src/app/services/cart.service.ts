// cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  // Observable to subscribe to changes in cart item count
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.incrementCartValue();
  }

  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
    this.decrementCartValue();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  private incrementCartValue(): void {
    const currentItems = this.cartItemCountSubject.value;
    this.cartItemCountSubject.next(currentItems + 1);
  }

  private decrementCartValue(): void {
    const currentItems = this.cartItemCountSubject.value;
    this.cartItemCountSubject.next(currentItems - 1);
  }
}
