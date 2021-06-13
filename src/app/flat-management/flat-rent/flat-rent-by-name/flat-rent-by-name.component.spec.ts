import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRentByNameComponent } from './flat-rent-by-name.component';

describe('FlatRentByNameComponent', () => {
  let component: FlatRentByNameComponent;
  let fixture: ComponentFixture<FlatRentByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatRentByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatRentByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
