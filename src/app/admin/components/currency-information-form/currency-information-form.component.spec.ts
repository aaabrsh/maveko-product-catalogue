import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInformationFormComponent } from './currency-information-form.component';

describe('CurrencyInformationFormComponent', () => {
  let component: CurrencyInformationFormComponent;
  let fixture: ComponentFixture<CurrencyInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
