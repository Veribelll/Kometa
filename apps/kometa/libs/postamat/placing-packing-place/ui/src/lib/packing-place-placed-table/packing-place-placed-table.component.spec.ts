import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlacePlacedTableComponent } from './packing-place-placed-table.component';

describe('PackingPlacePlacedTableComponent', () => {
  let component: PackingPlacePlacedTableComponent;
  let fixture: ComponentFixture<PackingPlacePlacedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlacePlacedTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlacePlacedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
