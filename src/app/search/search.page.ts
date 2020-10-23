import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PlaysongPage } from '../playsong/playsong.page'; 
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }

  playsong(){
    this.modalController.create({component:PlaysongPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }
}
