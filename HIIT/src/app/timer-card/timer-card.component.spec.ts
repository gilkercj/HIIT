import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCardComponent } from './timer-card.component';

describe('TimerCardComponent', () => {
  let component: TimerCardComponent;
  let fixture: ComponentFixture<TimerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});