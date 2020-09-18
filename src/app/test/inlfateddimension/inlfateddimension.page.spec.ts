import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InlfateddimensionPage } from './inlfateddimension.page';

describe('InlfateddimensionPage', () => {
  let component: InlfateddimensionPage;
  let fixture: ComponentFixture<InlfateddimensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlfateddimensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InlfateddimensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
