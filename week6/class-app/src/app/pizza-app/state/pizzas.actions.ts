import { createAction, props } from '@ngrx/store';
import { Pizza, PizzaEntity } from 'api/lib/api-interfaces';
import { PizzaForm } from 'src/app/shared/services/pizzas.service';

export const loadPizzaPresets = createAction('[Pizzas] Load Pizzas');

export const loadPizzaPresetsSuccess = createAction(
  '[Pizzas] Load Pizzas Success',
  props<{ pizzas: PizzaEntity[] }>()
);

export const loadPizzaPresetsFailure = createAction(
  '[Pizzas] Load Pizzas Failure',
  props<{ error: any }>()
);

export const savePizzas = createAction(
  '[Pizzas] Save Pizza',
  props<{ pizzas: PizzaForm[] }>()
);

export const savePizzasSuccess = createAction(
  '[Pizzas] Save Pizzas Success',
  props<{ pizzas: PizzaEntity[] }>()
);

export const savePizzasFailure = createAction(
  '[Pizzas] Save Pizzas Failure',
  props<{ error: any }>()
);
