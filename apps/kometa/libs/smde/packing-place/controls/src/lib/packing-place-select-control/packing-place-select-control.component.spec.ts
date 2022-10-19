import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceSelectControlComponent } from './packing-place-select-control.component';

describe('PackingPlaceSelectControlComponent', () => {
  let component: PackingPlaceSelectControlComponent;
  let fixture: ComponentFixture<PackingPlaceSelectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceSelectControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
