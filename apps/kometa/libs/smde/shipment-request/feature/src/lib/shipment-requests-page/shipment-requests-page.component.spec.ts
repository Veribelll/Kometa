import { ShipmentRequestsPageComponent } from './shipment-requests-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShipmentRequestsPageComponent', () => {
  let component: ShipmentRequestsPageComponent;
  let fixture: ComponentFixture<ShipmentRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentRequestsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
