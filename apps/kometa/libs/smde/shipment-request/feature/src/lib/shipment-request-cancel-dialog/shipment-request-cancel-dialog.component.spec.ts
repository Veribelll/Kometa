import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRequestCancelDialogComponent } from './shipment-request-cancel-dialog.component';

describe('ShipmentRequestCancelDialogComponent', () => {
  let component: ShipmentRequestCancelDialogComponent;
  let fixture: ComponentFixture<ShipmentRequestCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestCancelDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
