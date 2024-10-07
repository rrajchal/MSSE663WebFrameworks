import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { TitleComponent } from './components/title/title.component';
import { CheckoutComponent } from './components/checkout-process/checkout/checkout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageProductsComponent } from './components/manage/manage-products/manage-products.component';
import { CreateProductsComponent } from './components/manage/create-products/create-products.component';
import { UpdateProductsComponent } from './components/manage/update-products/update-products.component';
import { DeleteProductsComponent } from './components/manage/delete-products/delete-products.component';
import { ListProductsComponent } from './components/manage/list-products/list-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { EditProductsComponent } from './components/manage/edit-products/edit-products.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { InputContainerComponent } from './components/templates/input-container/input-container.component';
import { InputValidationComponent } from './components/templates/input-validation/input-validation.component';
import { TextInputComponent } from './components/templates/text-input/text-input.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DefaultButtonComponent } from './components/templates/default-button/default-button.component';
import { OrderItemListComponent } from './components/checkout-process/order-item-list/order-item-list.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './components/checkout-process/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/checkout-process/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './components/checkout-process/order-track-page/order-track-page.component';


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
    ListProductsComponent,
    EditProductsComponent,
    RegisterPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    ProfileComponent,
    DefaultButtonComponent,
    OrderItemListComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 3000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
