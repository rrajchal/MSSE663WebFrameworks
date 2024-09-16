import { Component } from '@angular/core';
import { PizzasService } from '../shared/services/pizzas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private pizzasService: PizzasService) {}

  readonly pizzas$ = this.pizzasService.getPizzaPresets();
}
