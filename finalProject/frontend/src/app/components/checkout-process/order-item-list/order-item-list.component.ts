import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/Order';

@Component({
  selector: 'order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.scss'
})
export class OrderItemListComponent {
  @Input()
  order!:Order;
}
