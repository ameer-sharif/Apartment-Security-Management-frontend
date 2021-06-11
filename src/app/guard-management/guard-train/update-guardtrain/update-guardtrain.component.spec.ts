import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardtrainComponent } from './update-guardtrain.component';

describe('UpdateGuardtrainComponent', () => {
  let component: UpdateGuardtrainComponent;
  let fixture: ComponentFixture<UpdateGuardtrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuardtrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuardtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
