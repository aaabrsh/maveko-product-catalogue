import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonModule } from '../app.common.module';
import { CardViewComponent } from './components/ui/card-view/card-view.component';
import { CardComponent } from './components/container/card/card.component';


@NgModule({
  declarations: [
    CardViewComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,    
  ],
  exports: [
    CardComponent
  ] 
})
export class SharedModule { }
