import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRentByIdComponent } from './flat-rent-by-id.component';

describe('FlatRentByIdComponent', () => {
  let component: FlatRentByIdComponent;
  let fixture: ComponentFixture<FlatRentByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatRentByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatRentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
