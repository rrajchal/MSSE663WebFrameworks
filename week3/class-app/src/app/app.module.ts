import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { SizePipe } from './shared/pipes/size.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ManagePizzaComponent } from './manage-pizza/manage-pizza.component';
import { ListPizzaComponent } from './list-pizza/list-pizza.component';
import { CreatePizzaComponent } from './create-pizza/create-pizza.component';
import { UpdatePizzaComponent } from './update-pizza/update-pizza.component';
import { DeletePizzaComponent } from './delete-pizza/delete-pizza.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PizzaAppComponent,
    SizePipe,
    PageNotFoundComponent,
    PizzaListComponent,
    ManagePizzaComponent,
    ListPizzaComponent,
    CreatePizzaComponent,
    UpdatePizzaComponent,
    DeletePizzaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
