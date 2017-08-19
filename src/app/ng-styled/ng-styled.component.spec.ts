import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyledComponent } from './ng-styled.component';

describe('NgStyledComponent', () => {
  let component: NgStyledComponent;
  let fixture: ComponentFixture<NgStyledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
