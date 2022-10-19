import { ShipmentRequestTableComponent } from './shipment-request-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestTableComponent', () => {
  let component: ShipmentRequestTableComponent;
  let fixture: ComponentFixture<ShipmentRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
