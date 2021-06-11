import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDomesticHelpComponent } from './update-domestic-help.component';

describe('UpdateDomesticHelpComponent', () => {
  let component: UpdateDomesticHelpComponent;
  let fixture: ComponentFixture<UpdateDomesticHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDomesticHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDomesticHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
