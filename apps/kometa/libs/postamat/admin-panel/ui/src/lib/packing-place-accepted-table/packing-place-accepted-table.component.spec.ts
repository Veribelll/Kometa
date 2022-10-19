import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceAcceptedTableComponent } from './packing-place-accepted-table.component';

describe('PackingPlaceAcceptedTableComponent', () => {
  let component: PackingPlaceAcceptedTableComponent;
  let fixture: ComponentFixture<PackingPlaceAcceptedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceAcceptedTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceAcceptedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
