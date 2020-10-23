import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionPage } from '../option/option.page';

@Component({
  selector: 'app-album-song',
  templateUrl: './album-song.page.html',
  styleUrls: ['./album-song.page.scss'],
})
export class AlbumSongPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
 
  option(){
    this.modalController.create({component:OptionPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }
}
