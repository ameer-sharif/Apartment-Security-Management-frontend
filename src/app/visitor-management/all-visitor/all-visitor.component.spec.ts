import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitorComponent } from './all-visitor.component';

describe('AllVisitorComponent', () => {
  let component: AllVisitorComponent;
  let fixture: ComponentFixture<AllVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
