import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.scss'],
})
export class PizzaCreatorComponent {
  @Input() pizzas!: FormArray;

  @Output() add = new EventEmitter<void>();
  @Output() remove = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  get openPizza() {
    return this.visiblePizza;
  }

  set openPizza(index: number) {
    this.visiblePizza = index;
    if (~index) {
      this.toggle.emit(index);
    }
  }

  private visiblePizza = 0;

  addPizza() {
    this.add.emit();
    this.openPizza = this.pizzas.length - 1;
  }

  removePizza(index: number) {
    this.remove.emit(index);
    this.openPizza = this.pizzas.length - 1;
  }

  togglePizza(index: number) {
    if (this.openPizza === index) {
      this.openPizza = -1;
      return;
    }
    this.openPizza = index;
  }

  toFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }
}
