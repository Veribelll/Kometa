import { TemplateSectionUpdateDialogComponent } from './template-section-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionUpdateDialogComponent', () => {
  let component: TemplateSectionUpdateDialogComponent;
  let fixture: ComponentFixture<TemplateSectionUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
