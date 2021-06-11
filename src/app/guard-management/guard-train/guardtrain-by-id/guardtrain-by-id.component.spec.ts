import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardtrainByIdComponent } from './guardtrain-by-id.component';

describe('GuardtrainByIdComponent', () => {
  let component: GuardtrainByIdComponent;
  let fixture: ComponentFixture<GuardtrainByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardtrainByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardtrainByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
