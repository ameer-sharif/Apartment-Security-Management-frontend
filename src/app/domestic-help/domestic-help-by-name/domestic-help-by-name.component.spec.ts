import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticHelpByNameComponent } from './domestic-help-by-name.component';

describe('DomesticHelpByNameComponent', () => {
  let component: DomesticHelpByNameComponent;
  let fixture: ComponentFixture<DomesticHelpByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticHelpByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticHelpByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
