import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFlatRentComponent } from './delete-flat-rent.component';

describe('DeleteFlatRentComponent', () => {
  let component: DeleteFlatRentComponent;
  let fixture: ComponentFixture<DeleteFlatRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFlatRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFlatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
