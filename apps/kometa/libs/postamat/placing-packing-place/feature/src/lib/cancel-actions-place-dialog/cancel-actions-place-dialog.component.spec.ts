import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelActionsPlaceDialogComponent } from './cancel-actions-place-dialog.component';

describe('CancelActionsPlaceDialogComponent', () => {
  let component: CancelActionsPlaceDialogComponent;
  let fixture: ComponentFixture<CancelActionsPlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelActionsPlaceDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelActionsPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
