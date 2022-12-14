import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/container/category-list/category-list.component';
import { ProductDetailComponent } from './components/container/product-detail/product-detail.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';

import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'categories',component:CategoryListComponent},
  { path:'product_items/:id',component:ProductDetailComponent}
  // { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  // { path: 'categories',component:CategoryListComponent, canActivate: [AuthGuard]},
  // { path:'product-detail',component:ProductDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
