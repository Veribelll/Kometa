import { CellCreateFormComponent } from './cell-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellCreateFormComponent', () => {
  let component: CellCreateFormComponent;
  let fixture: ComponentFixture<CellCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
