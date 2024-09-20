import { PizzaEntity } from '../lib/api-interfaces';
import { PIZZAS } from '../lib/pizza';

export class PizzaService {
  private readonly pizzaPresets: PizzaEntity[] = PIZZAS;
  private readonly pizzas: PizzaEntity[] = [];

  getPizzaPresets(): PizzaEntity[] {
    return this.pizzaPresets;
  }

  getCreatedPizzas(): PizzaEntity[] {
    return this.pizzas;
  }

  getCreatedPizza(id: string): PizzaEntity {
    const pizza = this.pizzas.find((pizza) => pizza.id === id);

    if (!pizza) {
      throw new Error('Pizza not found');
    }

    return pizza;
  }
}
