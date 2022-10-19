import { TemplateSectionDetailFormComponent } from './template-section-detail-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionDetailFormComponent', () => {
  let component: TemplateSectionDetailFormComponent;
  let fixture: ComponentFixture<TemplateSectionDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionDetailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
