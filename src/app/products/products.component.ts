import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  searchTerm: string = '';
  products = []; // Initialize your products array

  addToCart(product:any) {
    // logic to add product to cart
  }

}
