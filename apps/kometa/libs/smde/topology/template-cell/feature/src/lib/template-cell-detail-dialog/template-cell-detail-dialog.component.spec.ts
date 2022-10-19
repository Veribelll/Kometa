import { TemplateCellDetailDialogComponent } from './template-cell-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellDetailDialogComponent', () => {
  let component: TemplateCellDetailDialogComponent;
  let fixture: ComponentFixture<TemplateCellDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
