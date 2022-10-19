import { TemplateCellDeleteDialogComponent } from './template-cell-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellDeleteDialogComponent', () => {
  let component: TemplateCellDeleteDialogComponent;
  let fixture: ComponentFixture<TemplateCellDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
