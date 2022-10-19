import { CellTableComponent } from './cell-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellTableComponent', () => {
  let component: CellTableComponent;
  let fixture: ComponentFixture<CellTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
