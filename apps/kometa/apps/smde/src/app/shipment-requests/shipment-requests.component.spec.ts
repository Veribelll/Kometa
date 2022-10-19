import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRequestsComponent } from './shipment-requests.component';

describe('ShipmentRequestsComponent', () => {
  let component: ShipmentRequestsComponent;
  let fixture: ComponentFixture<ShipmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
