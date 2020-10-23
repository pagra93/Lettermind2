import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { AlbumSongPageRoutingModule } from './album-song-routing.module';

import { AlbumSongPage } from './album-song.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     TranslateModule,  
    AlbumSongPageRoutingModule
  ],
  declarations: [AlbumSongPage]
})
export class AlbumSongPageModule {}
