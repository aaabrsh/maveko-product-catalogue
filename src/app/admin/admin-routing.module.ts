import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { RoleGuard } from '../auth/shared/role.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard]
    // children: [
    //   {path: 'login', component: },
    //   {path: 'login', component: },
    // ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
