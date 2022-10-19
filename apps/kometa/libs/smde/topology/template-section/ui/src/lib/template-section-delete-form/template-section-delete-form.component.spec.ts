import { TemplateSectionDeleteFormComponent } from './template-section-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionDeleteFormComponent', () => {
  let component: TemplateSectionDeleteFormComponent;
  let fixture: ComponentFixture<TemplateSectionDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
