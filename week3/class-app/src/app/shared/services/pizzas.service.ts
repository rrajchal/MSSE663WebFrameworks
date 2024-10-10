import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaEntity } from 'api/lib/api-interfaces';
import { Observable, map } from 'rxjs';

interface PizzaResponse {
  msg: string;
  pizzas: PizzaEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzaPresets(): Observable<PizzaEntity[]> {
    return this.http
      .get<PizzaResponse>('/api/pizzas/presets')
      .pipe(map((data) => data.pizzas));
  }
  getCreatedPizzas(): Observable<PizzaEntity[]> {
    return this.http
      .get<PizzaResponse>('/api/pizzas')
      .pipe(map((data) => data.pizzas));
  }

  createPizza(pizzaSize: string, subToppings: string[]): Observable<{ msg: string }> {
    const pizza = { size: pizzaSize, toppings: subToppings };
    return this.http.post<{ msg: string }>('/api/pizzas/create', pizza);
  }
}
