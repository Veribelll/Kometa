import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacingPackingPlaceComponent } from './placing-packing-place.component';

describe('PlacingPackingPlaceComponent', () => {
  let component: PlacingPackingPlaceComponent;
  let fixture: ComponentFixture<PlacingPackingPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacingPackingPlaceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacingPackingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
