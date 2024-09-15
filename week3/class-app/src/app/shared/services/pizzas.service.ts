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
}
