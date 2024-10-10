import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PizzaAppComponent } from "./pizza-app/pizza-app.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
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
