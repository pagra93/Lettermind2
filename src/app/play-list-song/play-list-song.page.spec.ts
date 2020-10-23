import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayListSongPage } from './play-list-song.page';

describe('PlayListSongPage', () => {
  let component: PlayListSongPage;
  let fixture: ComponentFixture<PlayListSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayListSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
