import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindApplicationsPage } from './find-applications.page';

describe('FindApplicationsPage', () => {
  let component: FindApplicationsPage;
  let fixture: ComponentFixture<FindApplicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindApplicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindApplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
