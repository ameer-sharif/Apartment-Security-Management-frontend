import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserByNameComponent } from './user-by-name.component';

describe('UserByNameComponent', () => {
  let component: UserByNameComponent;
  let fixture: ComponentFixture<UserByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
