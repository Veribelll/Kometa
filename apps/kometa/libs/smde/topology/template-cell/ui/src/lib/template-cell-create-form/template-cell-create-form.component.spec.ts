import { TemplateCellCreateFormComponent } from './template-cell-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellCreateFormComponent', () => {
  let component: TemplateCellCreateFormComponent;
  let fixture: ComponentFixture<TemplateCellCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
