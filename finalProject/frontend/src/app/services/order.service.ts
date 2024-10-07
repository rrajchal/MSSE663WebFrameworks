import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NEW_ORDER_URL, ORDER_CREATE_URL, ORDER_PAY_URL } from '../shared/Constants';
import { Order } from '../shared/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrder():Observable<Order>{
    console.log("Order.service.ts: getNewOrder");
    return this.http.get<Order>(NEW_ORDER_URL);
  }

  pay(order:Order):Observable<string>{
    return this.http.post<string>(ORDER_PAY_URL, order);
  }

}
