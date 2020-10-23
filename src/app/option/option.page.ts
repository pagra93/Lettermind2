import { Component, OnInit } from '@angular/core';

 import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
	
  dismiss(){
   this.modalController.dismiss();
 }

} 
