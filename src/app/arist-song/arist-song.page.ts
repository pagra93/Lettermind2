import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionPage } from '../option/option.page';
@Component({
  selector: 'app-arist-song',
  templateUrl: './arist-song.page.html',
  styleUrls: ['./arist-song.page.scss'],
})
export class AristSongPage implements OnInit {
tab: string = "songs";
  constructor(private modalController: ModalController,) { }

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
