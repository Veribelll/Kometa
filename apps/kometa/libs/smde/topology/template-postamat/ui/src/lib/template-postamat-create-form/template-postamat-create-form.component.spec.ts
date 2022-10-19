import { TemplatePostamatCreateFormComponent } from './template-postamat-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatCreateFormComponent', () => {
  let component: TemplatePostamatCreateFormComponent;
  let fixture: ComponentFixture<TemplatePostamatCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
