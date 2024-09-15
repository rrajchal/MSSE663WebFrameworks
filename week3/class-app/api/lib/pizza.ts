import { idify } from '../utils';
import { Pizza, PizzaEntity } from './api-interfaces';

const MEAT_LOVER = ['bacon', 'pepperoni'];
const VEGGIE_LOVER = ['basil', 'mushroom', 'olive', 'onion', 'pepper'];
const SUPREME = [...MEAT_LOVER, ...VEGGIE_LOVER];

export const PIZZA_PRESETS: Pizza[] = [
  {
    size: 'small',
    toppings: [],
  },
  {
    size: 'medium',
    toppings: [],
  },
  {
    size: 'large',
    toppings: [],
  },
  {
    size: 'x-large',
    toppings: [],
  },
  {
    size: 'small',
    toppings: MEAT_LOVER,
  },
  {
    size: 'medium',
    toppings: MEAT_LOVER,
  },
  {
    size: 'large',
    toppings: MEAT_LOVER,
  },
  {
    size: 'x-large',
    toppings: MEAT_LOVER,
  },
  {
    size: 'small',
    toppings: VEGGIE_LOVER,
  },
  {
    size: 'medium',
    toppings: VEGGIE_LOVER,
  },
  {
    size: 'large',
    toppings: VEGGIE_LOVER,
  },
  {
    size: 'x-large',
    toppings: VEGGIE_LOVER,
  },
  {
    size: 'small',
    toppings: SUPREME,
  },
  {
    size: 'medium',
    toppings: SUPREME,
  },
  {
    size: 'large',
    toppings: SUPREME,
  },
  {
    size: 'x-large',
    toppings: SUPREME,
  },
];

export const PIZZAS: PizzaEntity[] = idify(PIZZA_PRESETS);
