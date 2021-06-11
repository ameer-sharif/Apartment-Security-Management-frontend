import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleByNameComponent } from './vehicle-by-name.component';

describe('VehicleByNameComponent', () => {
  let component: VehicleByNameComponent;
  let fixture: ComponentFixture<VehicleByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
