import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ManageProductsComponent } from './components/manage/manage-products/manage-products.component';
import { CreateProductsComponent } from './components/manage/create-products/create-products.component';
import { UpdateProductsComponent } from './components/manage/update-products/update-products.component';
import { DeleteProductsComponent } from './components/manage/delete-products/delete-products.component';
import { ListProductsComponent } from './components/manage/list-products/list-products.component';
import { EditProductsComponent } from './components/manage/edit-products/edit-products.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'category/:category', component:HomeComponent},
  {path: 'product/:id', component:ProductPageComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'manage-products', component:ManageProductsComponent},
  {path: 'create', component:CreateProductsComponent},
  {path: 'update', component:UpdateProductsComponent},
  {path: 'delete', component:DeleteProductsComponent},
  {path: 'list-all', component:ListProductsComponent},
  {path: 'edit-products', component:EditProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
