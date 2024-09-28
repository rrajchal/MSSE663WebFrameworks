import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { TitleComponent } from './components/title/title.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageProductsComponent } from './components/manage/manage-products/manage-products.component';
import { CreateProductsComponent } from './components/manage/create-products/create-products.component';
import { UpdateProductsComponent } from './components/manage/update-products/update-products.component';
import { DeleteProductsComponent } from './components/manage/delete-products/delete-products.component';
import { ListProductsComponent } from './components/manage/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ProductPageComponent,
    CategoryComponent,
    CartPageComponent,
    TitleComponent,
    CheckoutComponent,
    NotFoundComponent,
    LoginPageComponent,
    ManageProductsComponent,
    CreateProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
