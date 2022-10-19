import { CellDisplayUpdateFormComponent } from './cell-display-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellDisplayUpdateFormComponent', () => {
  let component: CellDisplayUpdateFormComponent;
  let fixture: ComponentFixture<CellDisplayUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDisplayUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDisplayUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
