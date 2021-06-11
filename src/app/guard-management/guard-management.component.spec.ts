import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardManagementComponent } from './guard-management.component';

describe('GuardManagementComponent', () => {
  let component: GuardManagementComponent;
  let fixture: ComponentFixture<GuardManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
