import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GesturePageRoutingModule } from './gesture-routing.module';

import { GesturePage } from './gesture.page';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GesturePageRoutingModule,
    DirectivesModule
  ],
  declarations: [GesturePage]
})
export class GesturePageModule {}
