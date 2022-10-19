import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDetailSkeletonComponent } from './cell-detail-skeleton.component';

describe('CellDetailSkeletonComponent', () => {
  let component: CellDetailSkeletonComponent;
  let fixture: ComponentFixture<CellDetailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDetailSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDetailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
