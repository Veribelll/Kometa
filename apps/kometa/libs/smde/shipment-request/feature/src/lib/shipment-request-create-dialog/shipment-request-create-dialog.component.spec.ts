import { ShipmentRequestCreateDialogComponent } from './shipment-request-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestCreateDialogComponent', () => {
  let component: ShipmentRequestCreateDialogComponent;
  let fixture: ComponentFixture<ShipmentRequestCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
