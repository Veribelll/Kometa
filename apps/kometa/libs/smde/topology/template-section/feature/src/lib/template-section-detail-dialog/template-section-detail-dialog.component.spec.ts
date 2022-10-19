import { TemplateSectionDetailDialogComponent } from './template-section-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionDetailDialogComponent', () => {
  let component: TemplateSectionDetailDialogComponent;
  let fixture: ComponentFixture<TemplateSectionDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
