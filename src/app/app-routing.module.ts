import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  }, 
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'choose-languages',
    loadChildren: () => import('./choose-languages/choose-languages.module').then( m => m.ChooseLanguagesPageModule)
  },
  {
    path: 'choose-arist',
    loadChildren: () => import('./choose-arist/choose-arist.module').then( m => m.ChooseAristPageModule)
  },
  {
    path: 'radio-play',
    loadChildren: () => import('./radio-play/radio-play.module').then( m => m.RadioPlayPageModule)
  },
  {
    path: 'add-song',
    loadChildren: () => import('./add-song/add-song.module').then( m => m.AddSongPageModule)
  },
  {
    path: 'album-song',
    loadChildren: () => import('./album-song/album-song.module').then( m => m.AlbumSongPageModule)
  },
  {
    path: 'arist-song',
    loadChildren: () => import('./arist-song/arist-song.module').then( m => m.AristSongPageModule)
  },
  {
    path: 'choose-arist2',
    loadChildren: () => import('./choose-arist2/choose-arist2.module').then( m => m.ChooseArist2PageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.module').then( m => m.PlaylistPageModule)
  }, 
  {
    path: 'createplaylist',
    loadChildren: () => import('./createplaylist/createplaylist.module').then( m => m.CreateplaylistPageModule)
  },
  {
    path: 'play-list-song',
    loadChildren: () => import('./play-list-song/play-list-song.module').then( m => m.PlayListSongPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./option/option.module').then( m => m.OptionPageModule)
  },
  {
    path: 'playsong',
    loadChildren: () => import('./playsong/playsong.module').then( m => m.PlaysongPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
