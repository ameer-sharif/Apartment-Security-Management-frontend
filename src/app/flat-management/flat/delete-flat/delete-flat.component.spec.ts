import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFlatComponent } from './delete-flat.component';

describe('DeleteFlatComponent', () => {
  let component: DeleteFlatComponent;
  let fixture: ComponentFixture<DeleteFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
