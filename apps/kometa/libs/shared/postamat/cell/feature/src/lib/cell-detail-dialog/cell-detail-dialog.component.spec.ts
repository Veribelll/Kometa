import { CellDetailDialogComponent } from './cell-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellDetailDialogComponent', () => {
  let component: CellDetailDialogComponent;
  let fixture: ComponentFixture<CellDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
