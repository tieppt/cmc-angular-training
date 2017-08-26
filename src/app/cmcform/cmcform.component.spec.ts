import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmcformComponent } from './cmcform.component';

describe('CmcformComponent', () => {
  let component: CmcformComponent;
  let fixture: ComponentFixture<CmcformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmcformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmcformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
