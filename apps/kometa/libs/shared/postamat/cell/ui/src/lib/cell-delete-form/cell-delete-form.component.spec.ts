import { CellDeleteFormComponent } from './cell-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellDeleteFormComponent', () => {
  let component: CellDeleteFormComponent;
  let fixture: ComponentFixture<CellDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
