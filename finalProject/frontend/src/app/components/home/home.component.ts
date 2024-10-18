import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/Product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute) {
    let productsObservable: Observable<Product[]>;
    activatedRoute.params.subscribe((param) => {
      if(param.searchTerm) {
        productsObservable = this.productService.getAllProductsBySearchTerm(param.searchTerm);
      } else if (param.category) {
        productsObservable = this.productService.getAllProductsByCategory(param.category);
      } else {
        productsObservable = productService.getAll();
      }
      productsObservable.subscribe((serverPrduct) => {
        this.products = serverPrduct;
      })
    })
  }

  ngOnInit(): void {}

}
