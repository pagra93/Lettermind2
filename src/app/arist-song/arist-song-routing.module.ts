import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AristSongPage } from './arist-song.page';

const routes: Routes = [
  {
    path: '',
    component: AristSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AristSongPageRoutingModule {}
