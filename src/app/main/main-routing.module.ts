import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/container/layout/layout.component';

import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '',
        loadChildren: () => import('../product-management/product-management.module').then(m => m.ProductManagementModule), canActivate: [AuthGuard] },
    ],canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
