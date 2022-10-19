import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestTimelineFormComponent } from './return-request-timeline-form.component';

describe('ReturnRequestTimelineFormComponent', () => {
  let component: ReturnRequestTimelineFormComponent;
  let fixture: ComponentFixture<ReturnRequestTimelineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestTimelineFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestTimelineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
