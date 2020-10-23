import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaysongPage } from './playsong.page';

describe('PlaysongPage', () => {
  let component: PlaysongPage;
  let fixture: ComponentFixture<PlaysongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaysongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaysongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
