import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss'],
})
export class PizzaAppComponent {
  prices = {
    small: { base: 9.99, size: 10 },
    meduim: { base: 11.99, size: 12 },
    large: { base: 13.99, size: 14 },
    'x-large': { base: 15.99, size: 16 },
  };
}
