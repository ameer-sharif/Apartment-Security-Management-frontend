import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomesticHelpComponent } from './add-domestic-help.component';

describe('AddDomesticHelpComponent', () => {
  let component: AddDomesticHelpComponent;
  let fixture: ComponentFixture<AddDomesticHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDomesticHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDomesticHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
