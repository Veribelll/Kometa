import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePeriodsPageDialogComponent } from './storage-periods-page-dialog.component';

describe('StoragePeriodsPageDialogComponent', () => {
  let component: StoragePeriodsPageDialogComponent;
  let fixture: ComponentFixture<StoragePeriodsPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoragePeriodsPageDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePeriodsPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
