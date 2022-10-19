import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestTimelineDialogComponent } from './return-request-timeline-dialog.component';

describe('ReturnRequestTimelineDialogComponent', () => {
  let component: ReturnRequestTimelineDialogComponent;
  let fixture: ComponentFixture<ReturnRequestTimelineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestTimelineDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestTimelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
