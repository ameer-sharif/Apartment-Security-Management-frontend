import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuardtrainComponent } from './all-guardtrain.component';

describe('AllGuardtrainComponent', () => {
  let component: AllGuardtrainComponent;
  let fixture: ComponentFixture<AllGuardtrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuardtrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuardtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
