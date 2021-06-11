import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardshiftComponent } from './update-guardshift.component';

describe('UpdateGuardshiftComponent', () => {
  let component: UpdateGuardshiftComponent;
  let fixture: ComponentFixture<UpdateGuardshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuardshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuardshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
