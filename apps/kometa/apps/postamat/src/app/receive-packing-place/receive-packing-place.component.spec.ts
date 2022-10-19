import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePackingPlaceComponent } from './receive-packing-place.component';

describe('ReceivePackingPlaceComponent', () => {
  let component: ReceivePackingPlaceComponent;
  let fixture: ComponentFixture<ReceivePackingPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceivePackingPlaceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePackingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
