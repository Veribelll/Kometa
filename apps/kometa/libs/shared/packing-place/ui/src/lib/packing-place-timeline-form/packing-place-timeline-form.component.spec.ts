import { PackingPlaceTimelineFormComponent } from './packing-place-timeline-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceTimelineFormComponent', () => {
  let component: PackingPlaceTimelineFormComponent;
  let fixture: ComponentFixture<PackingPlaceTimelineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceTimelineFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceTimelineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
