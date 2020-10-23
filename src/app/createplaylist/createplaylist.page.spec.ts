import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateplaylistPage } from './createplaylist.page';

describe('CreateplaylistPage', () => {
  let component: CreateplaylistPage;
  let fixture: ComponentFixture<CreateplaylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateplaylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateplaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
