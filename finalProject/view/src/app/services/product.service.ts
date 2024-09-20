import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/api/products');
  }

}
