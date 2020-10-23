import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-arist',
  templateUrl: './choose-arist.page.html',
  styleUrls: ['./choose-arist.page.scss'],
})
export class ChooseAristPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
	
	  goToTabs() { 
	  this.navCtrl.navigateRoot(['./tabs']);
  }

}
