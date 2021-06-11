import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlatsComponent } from './all-flats.component';

describe('AllFlatsComponent', () => {
  let component: AllFlatsComponent;
  let fixture: ComponentFixture<AllFlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
