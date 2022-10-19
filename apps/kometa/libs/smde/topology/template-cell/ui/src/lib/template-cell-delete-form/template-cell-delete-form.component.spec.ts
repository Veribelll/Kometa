import { TemplateCellDeleteFormComponent } from './template-cell-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellDeleteFormComponent', () => {
  let component: TemplateCellDeleteFormComponent;
  let fixture: ComponentFixture<TemplateCellDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
