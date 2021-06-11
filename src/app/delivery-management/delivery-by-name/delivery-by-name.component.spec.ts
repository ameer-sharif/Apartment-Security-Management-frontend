import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryByNameComponent } from './delivery-by-name.component';

describe('DeliveryByNameComponent', () => {
  let component: DeliveryByNameComponent;
  let fixture: ComponentFixture<DeliveryByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
