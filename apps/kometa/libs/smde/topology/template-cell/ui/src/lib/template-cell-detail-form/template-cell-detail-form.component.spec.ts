import { TemplateCellDetailFormComponent } from './template-cell-detail-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellDetailFormComponent', () => {
  let component: TemplateCellDetailFormComponent;
  let fixture: ComponentFixture<TemplateCellDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellDetailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
