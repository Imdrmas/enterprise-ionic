import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEnterprisePage } from './add-enterprise.page';

describe('AddEnterprisePage', () => {
  let component: AddEnterprisePage;
  let fixture: ComponentFixture<AddEnterprisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnterprisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEnterprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
