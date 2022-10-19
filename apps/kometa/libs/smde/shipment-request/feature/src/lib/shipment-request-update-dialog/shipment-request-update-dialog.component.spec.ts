import { ShipmentRequestUpdateDialogComponent } from './shipment-request-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestUpdateDialogComponent', () => {
  let component: ShipmentRequestUpdateDialogComponent;
  let fixture: ComponentFixture<ShipmentRequestUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
