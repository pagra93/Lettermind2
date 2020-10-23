import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  tab: string = "settigs";

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot(['./sign-in']);
  }
  subscribe() {
    this.route.navigate(['./subscribe']);
  }
  buyAppAction() {
    window.open("https://bit.ly/cc_Musicvic", '_system', 'location=no');
  }

}
