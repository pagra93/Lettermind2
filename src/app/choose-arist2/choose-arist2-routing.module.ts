import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseArist2Page } from './choose-arist2.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseArist2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseArist2PageRoutingModule {}
