import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRequestCancelFormComponent } from './shipment-request-cancel-form.component';

describe('ShipmentRequestCancelFormComponent', () => {
  let component: ShipmentRequestCancelFormComponent;
  let fixture: ComponentFixture<ShipmentRequestCancelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestCancelFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestCancelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
