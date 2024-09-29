import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PizzasState, selectPizzas } from '../pizza-app/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly pizzas$ = this.store.select(selectPizzas);

  constructor(private store: Store<PizzasState>) {}
}
