import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityByIdComponent } from './security-by-id.component';

describe('SecurityByIdComponent', () => {
  let component: SecurityByIdComponent;
  let fixture: ComponentFixture<SecurityByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
