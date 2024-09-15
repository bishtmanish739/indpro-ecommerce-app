import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems = []; // Initialize your cart items
  totalPrice = 0;

  removeFromCart(item:any) {
    // logic to remove the item from the cart
  }

  checkout() {
    // logic for checkout
  }

  calculateTotal() {
    // logic to calculate the total price
  }

}
