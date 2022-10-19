import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceSelectTableComponent } from './packing-place-select-table.component';

describe('PackingPlaceSelectTableComponent', () => {
  let component: PackingPlaceSelectTableComponent;
  let fixture: ComponentFixture<PackingPlaceSelectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceSelectTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
