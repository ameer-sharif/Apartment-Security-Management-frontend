import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardshiftByNameComponent } from './guardshift-by-name.component';

describe('GuardshiftByNameComponent', () => {
  let component: GuardshiftByNameComponent;
  let fixture: ComponentFixture<GuardshiftByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardshiftByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardshiftByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
