import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductCategoryFormComponent } from './components/product-category-form/product-category-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
// import { ProductPackageFormComponent } from './components/product-package-form/product-package-form.component';
// import { PackageItemFormComponent } from './components/package-item-form/package-item-form.component';
import { SupplierInformationFormComponent } from './components/supplier-information-form/supplier-information-form.component';
// import { ProductPackageOrderFormComponent } from './components/product-package-order-form/product-package-order-form.component';
import { CurrencyInformationFormComponent } from './components/currency-information-form/currency-information-form.component';
import { UnitOfMeasureFormComponent } from './components/unit-of-measure-form/unit-of-measure-form.component';
// import { OrderItemFormComponent } from './components/order-item-form/order-item-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductCategoryFormComponent,
    ProductFormComponent,
    // ProductPackageFormComponent,
    // PackageItemFormComponent,
    SupplierInformationFormComponent,
    // ProductPackageOrderFormComponent,
    CurrencyInformationFormComponent,
    UnitOfMeasureFormComponent,
    // OrderItemFormComponent,
    AddressFormComponent,
    ContactInformationFormComponent,
    CustomerFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
