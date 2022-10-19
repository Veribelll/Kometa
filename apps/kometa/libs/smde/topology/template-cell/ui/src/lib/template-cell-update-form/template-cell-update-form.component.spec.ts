import { TemplateCellUpdateFormComponent } from './template-cell-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellUpdateFormComponent', () => {
  let component: TemplateCellUpdateFormComponent;
  let fixture: ComponentFixture<TemplateCellUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
