import { TemplatePostamatDeleteFormComponent } from './template-postamat-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatDeleteFormComponent', () => {
  let component: TemplatePostamatDeleteFormComponent;
  let fixture: ComponentFixture<TemplatePostamatDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
