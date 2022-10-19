import { CellDisplayUpdateDialogComponent } from './cell-display-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellDisplayUpdateDialogComponent', () => {
  let component: CellDisplayUpdateDialogComponent;
  let fixture: ComponentFixture<CellDisplayUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDisplayUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDisplayUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
