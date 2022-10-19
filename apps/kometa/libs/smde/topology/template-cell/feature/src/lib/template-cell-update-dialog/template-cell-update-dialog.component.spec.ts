import { TemplateCellUpdateDialogComponent } from './template-cell-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellUpdateDialogComponent', () => {
  let component: TemplateCellUpdateDialogComponent;
  let fixture: ComponentFixture<TemplateCellUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
