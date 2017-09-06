import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsTimelineComponent } from './thoughts-timeline.component';

describe('ThoughtsTimelineComponent', () => {
  let component: ThoughtsTimelineComponent;
  let fixture: ComponentFixture<ThoughtsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
