import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticHelpComponent } from './domestic-help.component';

describe('DomesticHelpComponent', () => {
  let component: DomesticHelpComponent;
  let fixture: ComponentFixture<DomesticHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
