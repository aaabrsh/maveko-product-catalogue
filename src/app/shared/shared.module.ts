import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonModule } from '../app.common.module';
import { CardViewComponent } from './components/ui/card-view/card-view.component';


@NgModule({
  declarations: [
    CardViewComponent,
  ],
  imports: [
    CommonModule,
    AppCommonModule,    
  ],
  exports: [
    CardViewComponent
  ] 
})
export class SharedModule { }
