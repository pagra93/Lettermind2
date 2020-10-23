import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseLanguagesPage } from './choose-languages.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseLanguagesPageRoutingModule {}
