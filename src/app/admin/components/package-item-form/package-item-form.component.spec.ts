import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemFormComponent } from './package-item-form.component';

describe('PackageItemFormComponent', () => {
  let component: PackageItemFormComponent;
  let fixture: ComponentFixture<PackageItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
