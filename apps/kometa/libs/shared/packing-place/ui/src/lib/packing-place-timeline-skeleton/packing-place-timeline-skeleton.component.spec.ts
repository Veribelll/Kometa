import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceTimelineSkeletonComponent } from './packing-place-timeline-skeleton.component';

describe('PackingPlaceTimelineSkeletonComponent', () => {
  let component: PackingPlaceTimelineSkeletonComponent;
  let fixture: ComponentFixture<PackingPlaceTimelineSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceTimelineSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceTimelineSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
