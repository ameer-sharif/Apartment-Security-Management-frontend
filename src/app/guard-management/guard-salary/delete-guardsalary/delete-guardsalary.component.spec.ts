import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardsalaryComponent } from './delete-guardsalary.component';

describe('DeleteGuardsalaryComponent', () => {
  let component: DeleteGuardsalaryComponent;
  let fixture: ComponentFixture<DeleteGuardsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuardsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
