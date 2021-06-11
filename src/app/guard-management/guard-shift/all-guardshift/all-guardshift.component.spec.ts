import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuardshiftComponent } from './all-guardshift.component';

describe('AllGuardshiftComponent', () => {
  let component: AllGuardshiftComponent;
  let fixture: ComponentFixture<AllGuardshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuardshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuardshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
