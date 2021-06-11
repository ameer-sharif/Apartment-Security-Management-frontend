import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardtrainByNameComponent } from './guardtrain-by-name.component';

describe('GuardtrainByNameComponent', () => {
  let component: GuardtrainByNameComponent;
  let fixture: ComponentFixture<GuardtrainByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardtrainByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardtrainByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
