import { TemplatePostamatUpdateFormComponent } from './template-postamat-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatUpdateFormComponent', () => {
  let component: TemplatePostamatUpdateFormComponent;
  let fixture: ComponentFixture<TemplatePostamatUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
