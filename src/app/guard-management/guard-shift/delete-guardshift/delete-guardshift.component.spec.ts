import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardshiftComponent } from './delete-guardshift.component';

describe('DeleteGuardshiftComponent', () => {
  let component: DeleteGuardshiftComponent;
  let fixture: ComponentFixture<DeleteGuardshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuardshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
