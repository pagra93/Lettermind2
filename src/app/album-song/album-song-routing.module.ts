import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumSongPage } from './album-song.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumSongPageRoutingModule {}
