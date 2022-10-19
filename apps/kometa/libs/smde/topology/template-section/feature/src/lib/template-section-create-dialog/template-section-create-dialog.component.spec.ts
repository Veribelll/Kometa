import { TemplateSectionCreateDialogComponent } from './template-section-create-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionCreateDialogComponent', () => {
  let component: TemplateSectionCreateDialogComponent;
  let fixture: ComponentFixture<TemplateSectionCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionCreateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
