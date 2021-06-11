import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardtrainComponent } from './delete-guardtrain.component';

describe('DeleteGuardtrainComponent', () => {
  let component: DeleteGuardtrainComponent;
  let fixture: ComponentFixture<DeleteGuardtrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuardtrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
