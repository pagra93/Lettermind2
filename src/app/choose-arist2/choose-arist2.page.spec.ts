import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseArist2Page } from './choose-arist2.page';

describe('ChooseArist2Page', () => {
  let component: ChooseArist2Page;
  let fixture: ComponentFixture<ChooseArist2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseArist2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseArist2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
