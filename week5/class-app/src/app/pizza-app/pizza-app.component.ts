import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Pizza } from 'api/lib/api-interfaces';
import { map, startWith } from 'rxjs';
import { PizzasState, savePizzas } from './state';

type PizzaPrice = {
  [size: string]: {
    base: number;
    size: number;
    toppings: number;
  };
};

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss'],
})
export class PizzaAppComponent {
  activePizza = 0;

  prices: PizzaPrice = {
    small: { base: 9.99, size: 10, toppings: 0.69 },
    medium: { base: 11.99, size: 12, toppings: 0.99 },
    large: { base: 13.99, size: 14, toppings: 1.29 },
    'x-large': { base: 15.99, size: 16, toppings: 1.59 },
  };

  pizzaForm = this.fb.group({
    pizzas: this.fb.array([this.createPizza()]),
  });

  get pizzas(): FormArray {
    return this.pizzaForm.get('pizzas') as FormArray;
  }

  total$ = this.pizzas.valueChanges.pipe(
    startWith(this.calculateTotal(this.pizzas.value)),
    map(() => this.calculateTotal(this.pizzas.value))
  );

  constructor(private fb: FormBuilder, private store: Store<PizzasState>) {}

  createPizza() {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]],
    });
  }

  addPizza() {
    this.pizzas.push(this.createPizza());
  }

  removePizza(index: number) {
    this.pizzas.removeAt(index);
  }

  togglePizza(index: number) {
    this.activePizza = index;
  }

  calculateTotal(value: Pizza[]): string {
    const price = value.reduce((acc: number, next: Pizza) => {
      const price = this.prices[next.size];
      return acc + price.base + price.toppings * next.toppings.length;
    }, 0);
    return price.toFixed(2);
  }

  onSubmit(event: any) {
    console.log(event);
    const { pizzas } = this.pizzaForm.value;
    console.log(pizzas);
    this.store.dispatch(savePizzas({ pizzas }));
  }
}
