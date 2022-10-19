import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCellDialogComponent } from './select-cell-dialog.component';

describe('SelectCellDialogComponent', () => {
  let component: SelectCellDialogComponent;
  let fixture: ComponentFixture<SelectCellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCellDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
