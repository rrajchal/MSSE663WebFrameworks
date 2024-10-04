import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PizzasState, selectPizzas } from '../pizza-app/state';
import { PizzasStateService } from '../shared/services/pizzas-state.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //constructor(private pizzasStateService: PizzasStateService) { }
  //readonly pizzas$ = this.store.select(selectPizzas);
  //readonly pizzas$ = this.pizzasStateService.loadPizzasPreset();

  constructor(private activateRoute: ActivatedRoute) { }
  readonly pizzas$ = this.activateRoute.data.pipe(pluck('pizzas'));

}
