import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemListComponent } from './order-item-list.component';

describe('OrderItemListComponent', () => {
  let component: OrderItemListComponent;
  let fixture: ComponentFixture<OrderItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
