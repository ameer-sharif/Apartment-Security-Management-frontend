import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryByIdComponent } from './delivery-by-id.component';

describe('DeliveryByIdComponent', () => {
  let component: DeliveryByIdComponent;
  let fixture: ComponentFixture<DeliveryByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
