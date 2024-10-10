import { Component, ViewChild } from '@angular/core';
import { Product } from '../../../shared/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'stock', 'description', 'image'];
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatSort) sort!: MatSort;
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
        this.dataSource.data = this.products;
        this.dataSource.sort = this.sort;
      })
    })
  }
}
