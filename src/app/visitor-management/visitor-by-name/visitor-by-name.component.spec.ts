import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorByNameComponent } from './visitor-by-name.component';

describe('VisitorByNameComponent', () => {
  let component: VisitorByNameComponent;
  let fixture: ComponentFixture<VisitorByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
