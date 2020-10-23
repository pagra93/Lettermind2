import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbumSongPage } from './album-song.page';

describe('AlbumSongPage', () => {
  let component: AlbumSongPage;
  let fixture: ComponentFixture<AlbumSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
