import { TemplatesSectionComponent } from './templates-section.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatesSectionComponent', () => {
  let component: TemplatesSectionComponent;
  let fixture: ComponentFixture<TemplatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
