import { Component, ViewChild } from '@angular/core';
import { Product } from '../../../shared/Product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrl: './update-products.component.scss'
})
export class UpdateProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'stock', 'description', 'image', 'actions'];
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute, private router: Router) {
    let productsObservable: Observable<Product[]>;
    activatedRoute.params.subscribe((param) => {
     

      productService.getAll().subscribe((serverProduct) => {
        this.products = serverProduct;
        this.dataSource.data = this.products;
        this.dataSource.sort = this.sort;
      });
    });
  }

  editAndUpdate(product: Product) {
    console.log("Frontend deleteProduct from component: " + product.id);
    this.router.navigate(['/edit-products', { product: JSON.stringify(product) }]);
  }
}
