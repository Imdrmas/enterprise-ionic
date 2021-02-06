import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindApplicationPage } from './find-application.page';

describe('FindApplicationPage', () => {
  let component: FindApplicationPage;
  let fixture: ComponentFixture<FindApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindApplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
