import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindEnterprisesPage } from './find-enterprises.page';

describe('FindEnterprisesPage', () => {
  let component: FindEnterprisesPage;
  let fixture: ComponentFixture<FindEnterprisesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEnterprisesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindEnterprisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
