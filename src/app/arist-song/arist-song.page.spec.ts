import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AristSongPage } from './arist-song.page';

describe('AristSongPage', () => {
  let component: AristSongPage;
  let fixture: ComponentFixture<AristSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AristSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AristSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
