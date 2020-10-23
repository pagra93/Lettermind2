import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionPage } from '../option/option.page';
@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.page.html',
  styleUrls: ['./playsong.page.scss'],
})
export class PlaysongPage implements OnInit {
  fabAction = false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
  option() {
    this.modalController.create({ component: OptionPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

  toggleFab() {
    this.fabAction = !this.fabAction;
  }

}
