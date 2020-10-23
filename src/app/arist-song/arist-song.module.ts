import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
  
import { AristSongPageRoutingModule } from './arist-song-routing.module';

import { AristSongPage } from './arist-song.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    AristSongPageRoutingModule
  ],
  declarations: [AristSongPage]
})
export class AristSongPageModule {}
