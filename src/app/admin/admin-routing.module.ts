import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { RoleGuard } from '../auth/shared/role.guard';

import { ProductCategoryFormComponent } from './components/product-category-form/product-category-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SupplierInformationFormComponent } from './components/supplier-information-form/supplier-information-form.component';
import { CurrencyInformationFormComponent } from './components/currency-information-form/currency-information-form.component';
import { UnitOfMeasureFormComponent } from './components/unit-of-measure-form/unit-of-measure-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

// canActivate: [RoleGuard]
const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      {path: 'categories', component: ProductCategoryFormComponent},
      {path: 'product', component: ProductFormComponent},
      {path: 'supplier', component: SupplierInformationFormComponent},
      {path: 'currencie', component: CurrencyInformationFormComponent},
      {path: 'unit_of_measure', component: UnitOfMeasureFormComponent},
      {path: 'address', component: AddressFormComponent},
      {path: 'contact_info', component: ContactInformationFormComponent},
      {path: 'customer', component: CustomerFormComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
