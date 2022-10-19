import { TemplateSectionUpdateFormComponent } from './template-section-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionUpdateFormComponent', () => {
  let component: TemplateSectionUpdateFormComponent;
  let fixture: ComponentFixture<TemplateSectionUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
