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

  getPizzaById(id: string): PizzaEntity {
    return this.getCreatedPizza(id);
  }

  createPizza(pizza: PizzaEntity): PizzaEntity {
    this.pizzas.push(pizza);
    return pizza;
  }

  updatePizza(id: string, updatedPizza: Partial<PizzaEntity>): PizzaEntity | null {
    const pizzaIndex = this.pizzas.findIndex((pizza) => pizza.id === id);
    if (pizzaIndex === -1) {
      return null;
    }
    const currentPizza = this.pizzas[pizzaIndex];
    const newPizza = { ...currentPizza, ...updatedPizza };
    this.pizzas[pizzaIndex] = newPizza;

    return newPizza;
  }

  deletePizza(id: string): boolean {
    const pizzaIndex = this.pizzas.findIndex((pizza) => pizza.id === id);

    if (pizzaIndex === -1) {
      return false;
    }

    this.pizzas.splice(pizzaIndex, 1);
    return true;
  }

}
