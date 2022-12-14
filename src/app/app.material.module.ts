import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
    exports: [
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatListModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatSidenavModule,
        MatGridListModule,
        MatTreeModule,
        MatBadgeModule
    ]
})
export class MaterialModule { }
