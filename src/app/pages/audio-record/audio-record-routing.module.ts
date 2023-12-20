import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioRecordPage } from './audio-record.page';

const routes: Routes = [
  {
    path: '',
    component: AudioRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioRecordPageRoutingModule {}
