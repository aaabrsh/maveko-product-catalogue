import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { AppCommonModule } from '../app.common.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListViewComponent } from './components/ui/product-list-view/product-list-view.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { CategoryListViewComponent } from './components/ui/category-list-view/category-list-view.component';
import { CategoryListComponent } from './components/container/category-list/category-list.component';

@NgModule({
  declarations: [
    ProductListViewComponent,
    ProductListComponent,
    CategoryListViewComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductManagementRoutingModule,
    AppCommonModule
  ]
})
export class ProductManagementModule { }
