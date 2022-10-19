import { CellsDialogComponent } from './cells-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellsDialogComponent', () => {
  let component: CellsDialogComponent;
  let fixture: ComponentFixture<CellsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
