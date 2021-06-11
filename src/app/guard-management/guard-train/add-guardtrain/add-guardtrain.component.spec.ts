import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardtrainComponent } from './add-guardtrain.component';

describe('AddGuardtrainComponent', () => {
  let component: AddGuardtrainComponent;
  let fixture: ComponentFixture<AddGuardtrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuardtrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
