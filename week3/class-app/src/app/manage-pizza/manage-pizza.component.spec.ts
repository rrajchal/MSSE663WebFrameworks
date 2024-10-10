import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePizzaComponent } from './manage-pizza.component';

describe('ManagePizzaComponent', () => {
  let component: ManagePizzaComponent;
  let fixture: ComponentFixture<ManagePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
