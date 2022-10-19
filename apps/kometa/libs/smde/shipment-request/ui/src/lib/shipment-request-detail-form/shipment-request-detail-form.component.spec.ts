import { ShipmentRequestDetailFormComponent } from './shipment-request-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestDetailFormComponent', () => {
  let component: ShipmentRequestDetailFormComponent;
  let fixture: ComponentFixture<ShipmentRequestDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
