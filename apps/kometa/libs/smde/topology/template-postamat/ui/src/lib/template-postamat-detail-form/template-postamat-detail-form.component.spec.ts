import { TemplatePostamatDetailFormComponent } from './template-postamat-detail-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatDetailFormComponent', () => {
  let component: TemplatePostamatDetailFormComponent;
  let fixture: ComponentFixture<TemplatePostamatDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatDetailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
