import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePeriodTableComponent } from './storage-period-table.component';

describe('StoragePeriodTableComponent', () => {
  let component: StoragePeriodTableComponent;
  let fixture: ComponentFixture<StoragePeriodTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoragePeriodTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePeriodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
