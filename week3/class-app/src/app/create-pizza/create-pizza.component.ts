import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../shared/services/pizzas.service';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.scss']
})
export class CreatePizzaComponent implements OnInit {

  constructor(private pizzasService: PizzasService) {}

  ngOnInit(): void {
  }

  pizzaSize: string = 'medium';
  toppings: any = {
    veggieLover: false,
    meatLover: false,
    supreme: false
  };

  subToppings: string[] = [ ];

  successMessage: string = '';

  updateToppings(toppingType: string): void {
    if (!this.toppings[toppingType]) {
      this.subToppings = [];
    }
  }

  toggleSubTopping(subTopping: string): void {
    const index = this.subToppings.indexOf(subTopping);
    if (index > -1) {
      this.subToppings.splice(index, 1);
    } else {
      this.subToppings.push(subTopping);
    }
  }

  createPizza(): void {
    console.log(`Creating a ${this.pizzaSize} pizza with the following toppings: ${this.subToppings.join(', ')}`);

    this.pizzasService.createPizza(this.pizzaSize, this.subToppings);
  }
}
