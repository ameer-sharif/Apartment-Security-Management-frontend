import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardsalaryComponent } from './update-guardsalary.component';

describe('UpdateGuardsalaryComponent', () => {
  let component: UpdateGuardsalaryComponent;
  let fixture: ComponentFixture<UpdateGuardsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuardsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuardsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
