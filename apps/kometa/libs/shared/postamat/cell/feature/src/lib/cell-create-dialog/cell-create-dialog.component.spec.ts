import { CellCreateDialogComponent } from './cell-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellCreateDialogComponent', () => {
  let component: CellCreateDialogComponent;
  let fixture: ComponentFixture<CellCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
