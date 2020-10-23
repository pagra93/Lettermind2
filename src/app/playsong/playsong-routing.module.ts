import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaysongPage } from './playsong.page';

const routes: Routes = [
  {
    path: '',
    component: PlaysongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaysongPageRoutingModule {}
