import { createFeature, createReducer, on } from '@ngrx/store';
import { PizzaEntity } from 'api/lib/api-interfaces';
import {
  loadPizzaPresets,
  loadPizzaPresetsSuccess,
  savePizzasSuccess,
} from '.';

export interface PizzasState {
  pizzas: PizzaEntity[];
  loading: boolean;
}

const initialState: PizzasState = {
  pizzas: [],
  loading: false,
};

const pizzasFeature = createFeature({
  name: 'pizzas',
  reducer: createReducer(
    initialState,
    on(loadPizzaPresets, (state) => ({
      ...state,
      loading: true,
    })),
    on(loadPizzaPresetsSuccess, (state, { pizzas }) => ({
      ...state,
      pizzas,
      loading: false,
    })),
    on(savePizzasSuccess, (state, { pizzas }) => ({
      ...state,
      pizzas: [...state.pizzas, ...pizzas],
      loading: false,
    }))
  ),
});

export const { name, reducer, selectPizzas, selectPizzasState, selectLoading } =
  pizzasFeature;
