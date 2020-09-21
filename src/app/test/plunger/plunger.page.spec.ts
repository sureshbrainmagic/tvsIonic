import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlungerPage } from './plunger.page';

describe('PlungerPage', () => {
  let component: PlungerPage;
  let fixture: ComponentFixture<PlungerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlungerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlungerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
