import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePeriodUpdateDialogComponent } from './storage-period-update-dialog.component';

describe('StoragePeriodUpdateDialogComponent', () => {
  let component: StoragePeriodUpdateDialogComponent;
  let fixture: ComponentFixture<StoragePeriodUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoragePeriodUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePeriodUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
