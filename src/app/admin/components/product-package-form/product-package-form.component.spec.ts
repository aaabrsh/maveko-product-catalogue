import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPackageFormComponent } from './product-package-form.component';

describe('ProductPackageFormComponent', () => {
  let component: ProductPackageFormComponent;
  let fixture: ComponentFixture<ProductPackageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPackageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPackageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
