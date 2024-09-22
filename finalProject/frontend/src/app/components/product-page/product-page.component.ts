import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/Product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  product!: Product;
  constructor(activatedRoute:ActivatedRoute, productService:ProductService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((param) => {
      if(param.id) {
        productService.getProductById(param.id).subscribe(serverProduct => {
          this.product = serverProduct;
        });
      }
    })
   }

   addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}
