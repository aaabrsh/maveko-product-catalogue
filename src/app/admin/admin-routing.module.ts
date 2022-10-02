import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { RoleGuard } from '../auth/shared/role.guard';

import { ProductCategoryFormComponent } from './components/product-category-form/product-category-form.component';

// canActivate: [RoleGuard]
const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      {path: 'categories', component: ProductCategoryFormComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
