import { TemplatesSectionPageComponent } from './templates-section-page.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatesSectionPageComponent', () => {
  let component: TemplatesSectionPageComponent;
  let fixture: ComponentFixture<TemplatesSectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesSectionPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
