import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuardsalaryComponent } from './all-guardsalary.component';

describe('AllGuardsalaryComponent', () => {
  let component: AllGuardsalaryComponent;
  let fixture: ComponentFixture<AllGuardsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuardsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuardsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
