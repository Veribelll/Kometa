import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceForPlacementTableComponent } from './packing-place-for-placement-table.component';

describe('PackingPlaceForPlacementTableComponent', () => {
  let component: PackingPlaceForPlacementTableComponent;
  let fixture: ComponentFixture<PackingPlaceForPlacementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceForPlacementTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceForPlacementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
