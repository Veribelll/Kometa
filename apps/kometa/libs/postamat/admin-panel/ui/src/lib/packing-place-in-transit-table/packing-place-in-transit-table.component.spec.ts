import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceInTransitTableComponent } from './packing-place-in-transit-table.component';

describe('PackingPlaceInTransitTableComponent', () => {
  let component: PackingPlaceInTransitTableComponent;
  let fixture: ComponentFixture<PackingPlaceInTransitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceInTransitTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceInTransitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
