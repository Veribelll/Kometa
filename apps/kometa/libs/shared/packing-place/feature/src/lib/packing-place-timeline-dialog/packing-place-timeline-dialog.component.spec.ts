import { PackingPlaceTimelineDialogComponent } from './packing-place-timeline-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceTimelineDialogComponent', () => {
  let component: PackingPlaceTimelineDialogComponent;
  let fixture: ComponentFixture<PackingPlaceTimelineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceTimelineDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceTimelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
