export type PizzaSize = 'small' | 'medium' | 'large' | 'x-large';

export interface Pizza {
  size: PizzaSize;
  toppings: string[];
}

export interface PizzaEntity extends Pizza {
  id: string;
}
