import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPageRoutingModule } from './select-routing.module';

import { SelectPage } from './select.page';
import { SearchableSelectComponent } from '../components/searchable-select/searchable-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPageRoutingModule,
    SearchableSelectComponent
  ],
  declarations: [SelectPage]
})
export class SelectPageModule {}
