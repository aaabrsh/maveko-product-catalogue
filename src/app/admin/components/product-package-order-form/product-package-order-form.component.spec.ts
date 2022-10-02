import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPackageOrderFormComponent } from './product-package-order-form.component';

describe('ProductPackageOrderFormComponent', () => {
  let component: ProductPackageOrderFormComponent;
  let fixture: ComponentFixture<ProductPackageOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPackageOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPackageOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
