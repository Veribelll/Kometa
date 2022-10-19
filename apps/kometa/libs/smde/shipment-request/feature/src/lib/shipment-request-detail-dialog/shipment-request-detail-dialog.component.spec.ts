import { ShipmentRequestDetailDialogComponent } from './shipment-request-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestDetailDialogComponent', () => {
  let component: ShipmentRequestDetailDialogComponent;
  let fixture: ComponentFixture<ShipmentRequestDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
