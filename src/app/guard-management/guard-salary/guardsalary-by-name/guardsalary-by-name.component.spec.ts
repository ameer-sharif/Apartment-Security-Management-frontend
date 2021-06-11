import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsalaryByNameComponent } from './guardsalary-by-name.component';

describe('GuardsalaryByNameComponent', () => {
  let component: GuardsalaryByNameComponent;
  let fixture: ComponentFixture<GuardsalaryByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardsalaryByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardsalaryByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
