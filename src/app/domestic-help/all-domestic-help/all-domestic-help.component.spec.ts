import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDomesticHelpComponent } from './all-domestic-help.component';

describe('AllDomesticHelpComponent', () => {
  let component: AllDomesticHelpComponent;
  let fixture: ComponentFixture<AllDomesticHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDomesticHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDomesticHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
