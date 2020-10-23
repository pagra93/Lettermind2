import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlaysongPage } from '../playsong/playsong.page';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  favorite_icon = false;
  constructor(private modalController: ModalController) { }

  toggleFavorite_icon() {
    this.favorite_icon = !this.favorite_icon;
  }

  playsong() {
    this.modalController.create({ component: PlaysongPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
