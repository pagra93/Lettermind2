import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseAristPage } from './choose-arist.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseAristPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseAristPageRoutingModule {}
