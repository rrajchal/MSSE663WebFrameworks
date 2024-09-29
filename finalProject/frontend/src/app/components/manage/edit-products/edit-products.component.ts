import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.scss'
})
export class EditProductsComponent implements OnInit {
  product!: Product;
  isFormValid: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productData = this.route.snapshot.paramMap.get('product');
    if (productData) {
      this.product = JSON.parse(productData);
    } else {
      console.error('No product data found in route parameters');
    }
    
  }

  updateProduct(): void {
    if (this.isFormValid) {
      this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
        this.router.navigate(['/list-all']);
      });
    } else {
      alert('Please fill in all required fields.');
    }
    console.log('Product updated successfully');
  }

  validateForm(): void {
    this.isFormValid = this.product.name && this.product.category && this.product.price && this.product.image ? true : false;
  }

}