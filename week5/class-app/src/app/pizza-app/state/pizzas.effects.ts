import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { PizzasService } from 'src/app/shared/services/pizzas.service';
import {
  loadPizzaPresets,
  loadPizzaPresetsFailure,
  loadPizzaPresetsSuccess,
  savePizzas,
  savePizzasFailure,
  savePizzasSuccess,
} from './pizzas.actions';

@Injectable({ providedIn: 'root' })
export class PizzasEffects {
  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPizzaPresets),
      switchMap(() =>
        this.pizzasService.getPizzaPresets().pipe(
          map(({ pizzas }) => loadPizzaPresetsSuccess({ pizzas })),
          catchError((error) => of(loadPizzaPresetsFailure({ error })))
        )
      )
    )
  );

  savePizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(savePizzas),
      concatMap(({ pizzas }) =>
        this.pizzasService.savePizzas(pizzas).pipe(
          map((pizzas) => savePizzasSuccess({ pizzas })),
          catchError((error) => of(savePizzasFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pizzasService: PizzasService
  ) {}
}
