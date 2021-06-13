import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlatRentComponent } from './add-flat-rent.component';

describe('AddFlatRentComponent', () => {
  let component: AddFlatRentComponent;
  let fixture: ComponentFixture<AddFlatRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlatRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
