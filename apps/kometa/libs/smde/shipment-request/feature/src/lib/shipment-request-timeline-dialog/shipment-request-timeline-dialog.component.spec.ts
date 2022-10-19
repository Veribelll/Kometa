import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRequestTimelineDialogComponent } from './shipment-request-timeline-dialog.component';

describe('ShipmentRequestTimelineDialogComponent', () => {
  let component: ShipmentRequestTimelineDialogComponent;
  let fixture: ComponentFixture<ShipmentRequestTimelineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestTimelineDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestTimelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
