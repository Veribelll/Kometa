import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceDetailSkeletonComponent } from './packing-place-detail-skeleton.component';

describe('PackingPlaceDetailSkeletonComponent', () => {
  let component: PackingPlaceDetailSkeletonComponent;
  let fixture: ComponentFixture<PackingPlaceDetailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceDetailSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceDetailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
