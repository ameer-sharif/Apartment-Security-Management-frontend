import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatByNameComponent } from './flat-by-name.component';

describe('FlatByNameComponent', () => {
  let component: FlatByNameComponent;
  let fixture: ComponentFixture<FlatByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
