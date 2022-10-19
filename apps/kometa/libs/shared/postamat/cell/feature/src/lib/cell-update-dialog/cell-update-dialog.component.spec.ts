import { CellUpdateDialogComponent } from './cell-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellUpdateDialogComponent', () => {
  let component: CellUpdateDialogComponent;
  let fixture: ComponentFixture<CellUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
