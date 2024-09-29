import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { PizzasResolver } from './pizzas.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      pizzasVM: PizzasResolver,
    },
  },
  {
    path: 'pizzas',
    component: PizzaAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
