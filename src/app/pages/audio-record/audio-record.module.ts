import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioRecordPageRoutingModule } from './audio-record-routing.module';

import { AudioRecordPage } from './audio-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioRecordPageRoutingModule
  ],
  declarations: [AudioRecordPage]
})
export class AudioRecordPageModule {}
