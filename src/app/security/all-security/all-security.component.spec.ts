import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSecurityComponent } from './all-security.component';

describe('AllSecurityComponent', () => {
  let component: AllSecurityComponent;
  let fixture: ComponentFixture<AllSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
