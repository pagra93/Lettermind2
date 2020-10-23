import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';  
import { CreateplaylistPage } from '../createplaylist/createplaylist.page'; 
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
 tab: string = "my_playlists";
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
		
createPlaylist(){
  this.modalController.create({component:CreateplaylistPage}).then((modalElement)=>
  {
    modalElement.present();
  }
  )
}
 play_list_song() {
    this.route.navigate(['./play-list-song']);
  }
 albumSong() {
    this.route.navigate(['./album-song']);
  }
 artistSong() {
    this.route.navigate(['./arist-song']);
  } 
 add_new_artist() {
    this.route.navigate(['./choose-arist2']);
  } 

}
