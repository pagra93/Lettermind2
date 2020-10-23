import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { RadioPlayPageRoutingModule } from './radio-play-routing.module';

import { RadioPlayPage } from './radio-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    RadioPlayPageRoutingModule
  ],
  declarations: [RadioPlayPage]
})
export class RadioPlayPageModule {}
