import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddApplicationPage } from './add-application.page';

describe('AddApplicationPage', () => {
  let component: AddApplicationPage;
  let fixture: ComponentFixture<AddApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
