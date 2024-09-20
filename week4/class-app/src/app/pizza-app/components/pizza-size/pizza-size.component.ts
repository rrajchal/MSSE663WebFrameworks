import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const PIZZA_SIZE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaSizeComponent),
  multi: true,
};

interface PizzaSize {
  type: 'x-large' | 'large' | 'medium' | 'small';
  inches: number;
}

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./pizza-size.component.scss'],
  providers: [PIZZA_SIZE_ACCESSOR],
})
export class PizzaSizeComponent implements ControlValueAccessor {
  private onTouched!: () => void;
  private onChanged!: (_: any) => void;

  value!: string;
  focused!: string;

  sizes: PizzaSize[] = [
    { type: 'x-large', inches: 16 },
    { type: 'large', inches: 14 },
    { type: 'medium', inches: 12 },
    { type: 'small', inches: 10 },
  ];

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  onChange(value: string) {
    this.value = value;
    this.onChanged(value);
  }

  onBlur() {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouched();
  }
}
