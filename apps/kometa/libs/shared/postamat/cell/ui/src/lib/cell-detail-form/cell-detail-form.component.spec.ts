import { CellDetailFormComponent } from './cell-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellDetailFormComponent', () => {
  let component: CellDetailFormComponent;
  let fixture: ComponentFixture<CellDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
