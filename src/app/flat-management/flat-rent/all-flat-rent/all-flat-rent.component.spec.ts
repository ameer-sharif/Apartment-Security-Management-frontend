import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlatRentComponent } from './all-flat-rent.component';

describe('AllFlatRentComponent', () => {
  let component: AllFlatRentComponent;
  let fixture: ComponentFixture<AllFlatRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFlatRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
