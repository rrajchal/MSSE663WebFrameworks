import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-summary',
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['pizza-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaSummaryComponent {
  @Input() pizzas!: FormArray;
  @Input() total: string | null = '';
  @Input() prices: any;
}
