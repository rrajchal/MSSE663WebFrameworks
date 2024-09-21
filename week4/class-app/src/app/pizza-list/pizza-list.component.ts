import { Component, OnInit } from '@angular/core';
import { PIZZA_PRESETS } from '../../../api/lib/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  pizzaPresets = PIZZA_PRESETS; // list provided by professor
  constructor() { }

  ngOnInit(): void {
  }

}
