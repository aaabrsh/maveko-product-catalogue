import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInformationFormComponent } from './supplier-information-form.component';

describe('SupplierInformationFormComponent', () => {
  let component: SupplierInformationFormComponent;
  let fixture: ComponentFixture<SupplierInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
