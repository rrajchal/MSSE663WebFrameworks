import { Component } from '@angular/core';
import { Product } from '../../../shared/Product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent {
  product: Product = new Product();
  isFormValid: boolean = true;

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    if (this.isFormValid) {
      this.productService.createProduct(this.product).subscribe(() => {
        this.router.navigate(['/view-all']);
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  validateForm(): void {
    this.isFormValid = this.product.name && this.product.category && this.product.price && this.product.image ? true : false;
  }
}
