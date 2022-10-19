import { CellUpdateFormComponent } from './cell-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellUpdateFormComponent', () => {
  let component: CellUpdateFormComponent;
  let fixture: ComponentFixture<CellUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
