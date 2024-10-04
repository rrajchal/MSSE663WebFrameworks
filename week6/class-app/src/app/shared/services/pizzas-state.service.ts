import { Injectable } from '@angular/core';
import { PizzaEntity } from 'api/lib/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import { PizzaResponse, PizzasService } from './pizzas.service';

@Injectable({
  providedIn: 'root'
})
export class PizzasStateService {
  private readonly pizzas = new BehaviorSubject<PizzaEntity[]>([]);
  readonly pizzas$ = this.pizzas.asObservable();

  constructor(private pizzaService: PizzasService) {
    this.loadPizzasPreset().subscribe();
  }

  loadPizzasPreset(): Observable<PizzaEntity[]> {
    return this.pizzaService.getPizzaPresets()
      .pipe(
        map((data: PizzaResponse) => data.pizzas),
        tap((pizzas) => {
          this.pizzas.next(pizzas);
        }), 
        shareReplay(1)
      );
  }

  createPizzas(pizzas: PizzaEntity[]) {
    const newPizzas = pizzas.map((pizza) => ({
      ...pizza, id: '99'
    }));
    this.pizzas.next(pizzas);
  }
}
