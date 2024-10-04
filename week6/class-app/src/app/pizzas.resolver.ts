import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, take, tap } from 'rxjs';
import {
  loadPizzaPresets,
  PizzasState,
  PizzasViewModel,
  selectPizzasViewModel,
} from './pizza-app/state';

@Injectable({ providedIn: 'root' })
export class PizzasResolver implements Resolve<PizzasViewModel> {
  resolve(route: ActivatedRouteSnapshot): Observable<PizzasViewModel> {
    return this.store.select(selectPizzasViewModel).pipe(
      tap((vm) => {
        if (vm && !vm.pizzas.length) {
          this.store.dispatch(loadPizzaPresets());
        }
      }),
      filter((vm) => !!vm.pizzas.length),
      take(1)
    );
  }

  constructor(private store: Store<PizzasState>) {}
}
