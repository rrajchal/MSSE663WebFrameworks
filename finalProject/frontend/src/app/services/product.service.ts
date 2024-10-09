import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CREATE_PRODUCTS, DELETE_PRODUCTS, EDIT_PRODUCTS, PRODUCTS_BY_CATEGORY_URL, PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_CATEGORIES_URL, PRODUCTS_URL } from '../shared/constants';
import { Category } from '../shared/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]> {
    console.log("Frontend: getAll");
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    console.log("Frontend: getAllProductsBySearchTerm: " + searchTerm);
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm) ||
      this.http.get<Product[]>(PRODUCTS_BY_CATEGORY_URL + searchTerm);
  }

  getProductById(productId: number): Observable<Product> {
    console.log("Frontend: getProductById: " + productId);
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + productId);
  }

  getAllCategories(): Observable<Category[]> {
    console.log("Frontend: getAllCategories");
    return this.http.get<Category[]>(PRODUCTS_CATEGORIES_URL);
  }

  getAllProductsByCategory(category: string): Observable<Product[]> {
    console.log("Frontend: getAllProductsByCategory: " + category);
    return this.http.get<Product[]>(PRODUCTS_BY_CATEGORY_URL + category);
  }

  createProduct(product: Product): Observable<Product> {
    console.log("Frontend: createProduct: " + product);
    return this.http.post<Product>(CREATE_PRODUCTS, product);
  }

  deleteProduct(productId: number): Observable<Product> {
    console.log("Frontend: deleteProduct from product.service: " + productId);
    return this.http.delete<Product>(`${DELETE_PRODUCTS}/${productId}`);
  }

  updateProduct(productId: number, product: Product): Observable<Product> {
    console.log("Frontend: updateProduct from product.service:  " + product);
    return this.http.put<Product>(`${EDIT_PRODUCTS}/${productId}`, product);
  }


/*
  getAll(): Observable<Product[]> {
    console.log("Frontend: getAll");
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    console.log("Frontend: getAllProductsBySearchTerm: " + searchTerm);
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_TERM);
  }
    */
  /*
  getAll(): Product[] {
    console.log("Frontend: getAll");
    return sample_data;
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    console.log("Frontend: getAllProductsBySearchTerm: " + searchTerm);
    return this.getAll().filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getProductById(productId: number): Product {
    console.log("Frontend: getProductById: " + productId);
    return this.getAll().find(product => product.id == productId) ?? new Product();
  }

  getAllCategories(): Category[] {
    return sample_categories;
  }

  getAllProductsByCategory(category: string): Product[] {
    console.log("Frontend: getAllProductsByCategory: " + category);
    return this.getAllProductsBySearchTerm(category);
  }
  */
}
