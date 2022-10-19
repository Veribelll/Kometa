import { CellDeleteDialogComponent } from './cell-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellDeleteDialogComponent', () => {
  let component: CellDeleteDialogComponent;
  let fixture: ComponentFixture<CellDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
