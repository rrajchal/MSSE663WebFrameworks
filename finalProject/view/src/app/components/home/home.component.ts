import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/Product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute) {
    let productsObservable: Observable<Product[]>;
    activatedRoute.params.subscribe((param) => {
      productsObservable = productService.getAll();
      productsObservable.subscribe((p) => {
        this.products = p;
      })
    })
  }


}
