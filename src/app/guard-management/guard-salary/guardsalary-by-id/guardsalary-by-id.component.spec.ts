import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsalaryByIdComponent } from './guardsalary-by-id.component';

describe('GuardsalaryByIdComponent', () => {
  let component: GuardsalaryByIdComponent;
  let fixture: ComponentFixture<GuardsalaryByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardsalaryByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardsalaryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
