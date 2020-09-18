import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestlistPage } from './testlist.page';

describe('TestlistPage', () => {
  let component: TestlistPage;
  let fixture: ComponentFixture<TestlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
