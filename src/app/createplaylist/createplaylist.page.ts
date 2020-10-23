import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplaylist',
  templateUrl: './createplaylist.page.html',
  styleUrls: ['./createplaylist.page.scss'],
})
export class CreateplaylistPage implements OnInit {

  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
  dismiss(){
   this.modalController.dismiss();
 }
 play_list_song() {
    this.route.navigate(['./play-list-song']);
	this.modalController.dismiss();
  }
}
