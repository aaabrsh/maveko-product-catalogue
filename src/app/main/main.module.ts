import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AppCommonModule } from '../app.common.module';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { LayoutComponent } from './components/container/layout/layout.component';
import { MenuComponent } from './components/container/menu/menu.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppCommonModule,
    SharedModule
  ]
})
export class MainModule { }
