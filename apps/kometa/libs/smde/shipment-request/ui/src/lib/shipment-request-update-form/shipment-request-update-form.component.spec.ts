import { ShipmentRequestUpdateFormComponent } from './shipment-request-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestUpdateFormComponent', () => {
  let component: ShipmentRequestUpdateFormComponent;
  let fixture: ComponentFixture<ShipmentRequestUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
