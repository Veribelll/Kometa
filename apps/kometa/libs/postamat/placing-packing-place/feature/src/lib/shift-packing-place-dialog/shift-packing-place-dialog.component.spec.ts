import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPackingPlaceDialogComponent } from './shift-packing-place-dialog.component';

describe('ShiftPackingPlaceDialogComponent', () => {
  let component: ShiftPackingPlaceDialogComponent;
  let fixture: ComponentFixture<ShiftPackingPlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShiftPackingPlaceDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftPackingPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
