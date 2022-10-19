import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRequestTimelineFormComponent } from './shipment-request-timeline-form.component';

describe('ShipmentRequestTimelineFormComponent', () => {
  let component: ShipmentRequestTimelineFormComponent;
  let fixture: ComponentFixture<ShipmentRequestTimelineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestTimelineFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestTimelineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
