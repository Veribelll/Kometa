import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacingPackingPlacePageComponent } from './placing-packing-place-page.component';

describe('PlacingPackingPlacePageComponent', () => {
  let component: PlacingPackingPlacePageComponent;
  let fixture: ComponentFixture<PlacingPackingPlacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacingPackingPlacePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacingPackingPlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
