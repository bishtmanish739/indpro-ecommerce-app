import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  placeOrder(order: any) {
    return this.http.post(`${this.apiUrl}`, order);
  }

  getUserOrders() {
    return this.http.get(`${this.apiUrl}`);
  }
}
