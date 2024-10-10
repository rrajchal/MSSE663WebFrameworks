import { Component, OnInit } from '@angular/core';
import {PizzasService} from "../shared/services/pizzas.service";

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  constructor(private pizzasService: PizzasService) {}

  ngOnInit(): void {
  }

  readonly pizzas$ = this.pizzasService.getCreatedPizzas();

}
