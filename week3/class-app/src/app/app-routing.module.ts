import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PizzaListComponent} from "./pizza-list/pizza-list.component";
import {ManagePizzaComponent} from "./manage-pizza/manage-pizza.component";
import {CreatePizzaComponent} from "./create-pizza/create-pizza.component";
import {ListPizzaComponent} from "./list-pizza/list-pizza.component";
import {UpdatePizzaComponent} from "./update-pizza/update-pizza.component";
import {DeletePizzaComponent} from "./delete-pizza/delete-pizza.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzaAppComponent },
  { path: 'pizzas/:pizzaId', component: PizzaAppComponent },
  { path: 'pizzas-list', component: PizzaListComponent},
  { path: 'manage', component: ManagePizzaComponent},
  { path: 'manage-pizza', component: ManagePizzaComponent },
  { path: 'create-pizza', component: CreatePizzaComponent },
  { path: 'list-pizza', component: ListPizzaComponent },
  { path: 'update-pizza', component: UpdatePizzaComponent },
  { path: 'delete-pizza', component: DeletePizzaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
