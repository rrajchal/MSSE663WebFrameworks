import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PizzaEntity } from 'api/lib/api-interfaces';
import { PizzasState, selectLoading } from '.';
import { selectPizzas } from './pizzas.reducer';

export interface PizzasViewModel {
  pizzas: PizzaEntity[];
  count: number;
  loading: boolean;
}

export const selectPizzasViewModel: MemoizedSelector<
  PizzasState,
  PizzasViewModel
> = createSelector(selectPizzas, selectLoading, (pizzas, loading) => ({
  pizzas,
  loading,
  count: pizzas.length,
}));
