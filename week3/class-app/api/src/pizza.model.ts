import { Schema, model } from 'mongoose';
import { Pizza } from '../lib/api-interfaces';

const PizzasSchema = new Schema<Pizza>({
  size: { type: String },
  toppings: {
    type: [String],
  },
});

export const Pizzas = model('Pizzas', PizzasSchema);
