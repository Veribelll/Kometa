import { TemplateSectionCreateFormComponent } from './template-section-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionCreateFormComponent', () => {
  let component: TemplateSectionCreateFormComponent;
  let fixture: ComponentFixture<TemplateSectionCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
