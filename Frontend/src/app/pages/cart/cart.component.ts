// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any []=[];

  constructor(private cartService: CartService,private router: Router) { }

  ngOnInit() {
    // Fetch cart items from the service
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item:any) {
    // Remove item from the cart
    this.cartService.removeFromCart(item);
    // Update the cart items after removal
    this.cartItems = this.cartService.getCartItems();
  }
  goToPayment() {
    this.router.navigate(['/payment']); // Assuming 'cart' is the route path for your cart page
  }
}
