import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatManagementComponent } from './flat-management.component';

describe('FlatManagementComponent', () => {
  let component: FlatManagementComponent;
  let fixture: ComponentFixture<FlatManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
