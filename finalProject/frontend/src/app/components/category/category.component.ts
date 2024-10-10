import { Component } from '@angular/core';
import { Category } from '../../shared/Category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories?: Category[];
  constructor(productService: ProductService) {
    productService.getAllCategories().subscribe(serverCategories => {
      this.categories = serverCategories;
    });
  }

}
