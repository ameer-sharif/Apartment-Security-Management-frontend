import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardshiftByIdComponent } from './guardshift-by-id.component';

describe('GuardshiftByIdComponent', () => {
  let component: GuardshiftByIdComponent;
  let fixture: ComponentFixture<GuardshiftByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardshiftByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardshiftByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
