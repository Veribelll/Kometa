import { TemplateSectionDeleteDialogComponent } from './template-section-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionDeleteDialogComponent', () => {
  let component: TemplateSectionDeleteDialogComponent;
  let fixture: ComponentFixture<TemplateSectionDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
