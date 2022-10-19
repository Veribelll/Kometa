import { ShipmentRequestCreateFormComponent } from './shipment-request-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestCreateFormComponent', () => {
  let component: ShipmentRequestCreateFormComponent;
  let fixture: ComponentFixture<ShipmentRequestCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
