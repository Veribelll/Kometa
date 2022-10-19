import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLockToCellDialogComponent } from './assign-lock-to-cell-dialog.component';

describe('AssignLockToCellDialogComponent', () => {
  let component: AssignLockToCellDialogComponent;
  let fixture: ComponentFixture<AssignLockToCellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignLockToCellDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLockToCellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
