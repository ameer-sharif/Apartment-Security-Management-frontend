import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatByIdComponent } from './flat-by-id.component';

describe('FlatByIdComponent', () => {
  let component: FlatByIdComponent;
  let fixture: ComponentFixture<FlatByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
