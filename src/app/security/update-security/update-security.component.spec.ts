import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSecurityComponent } from './update-security.component';

describe('UpdateSecurityComponent', () => {
  let component: UpdateSecurityComponent;
  let fixture: ComponentFixture<UpdateSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
