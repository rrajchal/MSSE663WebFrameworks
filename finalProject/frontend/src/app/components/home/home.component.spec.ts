import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../../shared/Product';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productServiceMock: any;
  let activatedRouteMock: any;

  beforeEach(async () => {
    productServiceMock = jasmine.createSpyObj('ProductService', ['getAll', 'getAllProductsBySearchTerm', 'getAllProductsByCategory']);
    activatedRouteMock = {
      params: of({})
    };

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: ProductService, useValue: productServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all products when no route parameters are provided', () => {
    productServiceMock.getAll.and.returnValue(of([
      { id: 1, name: 'Product1', category: 'Category1', price: 100, quantity: 2 } as Product,
      { id: 2, name: 'Product2', category: 'Category2', price: 200, quantity: 3 } as Product
    ]));

    activatedRouteMock.params = of({});

    // Trigger the observable subscription in the constructor
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.products.length).toBe(2); // This will be correct now
    expect(component.products[0].name).toBe('Product1');
    expect(productServiceMock.getAll).toHaveBeenCalled();
  });
});
