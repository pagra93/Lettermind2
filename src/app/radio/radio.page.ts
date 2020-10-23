import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 playRadio() {
    this.route.navigate(['./radio-play']);
  }
 subscribe() {
    this.route.navigate(['./subscribe']);
  }

}
