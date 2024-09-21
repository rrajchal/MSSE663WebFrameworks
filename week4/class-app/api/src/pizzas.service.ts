import { Pizza, PizzaEntity } from '../lib/api-interfaces';
import { PIZZA_PRESETS, PIZZAS } from '../lib/pizza';

export class PizzaService {

  private readonly pizzaPresets: PizzaEntity[] = PIZZAS;
  private readonly pizzas: PizzaEntity[] = [];
  private readonly pizzaSizeAndToppings: Pizza[] = PIZZA_PRESETS;

  getCreatedPizzas(): PizzaEntity[] {
    return this.pizzas;
  }

  getPizzaPresets(): PizzaEntity[] {
    //console.log("Backend pizzas.service.ts.getPizzaPresents()" + JSON.stringify(this.pizzaPresets));
    return this.pizzaPresets;
  }

  getAllPizzas(): PizzaEntity[] {
    return this.pizzas;
  }

  getPizzaById(id: string): PizzaEntity {
    const pizza = this.pizzas.find((pizza) => pizza.id === id);

    if (!pizza) {
       throw new Error('Backend pizzas.service.ts.getCreatedPizza(id)-Excepton thrown: Pizza not found');
    }

    return pizza;
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
