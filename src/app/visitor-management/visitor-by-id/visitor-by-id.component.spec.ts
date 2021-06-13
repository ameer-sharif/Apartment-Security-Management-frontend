import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorByIdComponent } from './visitor-by-id.component';

describe('VisitorByIdComponent', () => {
  let component: VisitorByIdComponent;
  let fixture: ComponentFixture<VisitorByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
