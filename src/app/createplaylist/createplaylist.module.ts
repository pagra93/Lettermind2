import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { CreateplaylistPageRoutingModule } from './createplaylist-routing.module';

import { CreateplaylistPage } from './createplaylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    CreateplaylistPageRoutingModule
  ],
  declarations: [CreateplaylistPage]
})
export class CreateplaylistPageModule {}
