import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindEnterprisePage } from './find-enterprise.page';

describe('FindEnterprisePage', () => {
  let component: FindEnterprisePage;
  let fixture: ComponentFixture<FindEnterprisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEnterprisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindEnterprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
