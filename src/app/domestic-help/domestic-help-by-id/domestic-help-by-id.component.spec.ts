import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticHelpByIdComponent } from './domestic-help-by-id.component';

describe('DomesticHelpByIdComponent', () => {
  let component: DomesticHelpByIdComponent;
  let fixture: ComponentFixture<DomesticHelpByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticHelpByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticHelpByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
