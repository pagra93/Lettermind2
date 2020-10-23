import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';  
import { OptionPage } from '../option/option.page';
@Component({
  selector: 'app-play-list-song',
  templateUrl: './play-list-song.page.html',
  styleUrls: ['./play-list-song.page.scss'],
})
export class PlayListSongPage implements OnInit {

  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
option(){
  this.modalController.create({component:OptionPage}).then((modalElement)=>
  {
    modalElement.present();
  }
  )
}

 add_song() {
    this.route.navigate(['./add-song']);
  }
	

}
