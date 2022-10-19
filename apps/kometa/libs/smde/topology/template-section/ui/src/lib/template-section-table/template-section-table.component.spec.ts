import { TemplateSectionTableComponent } from './template-section-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateSectionTableComponent', () => {
  let component: TemplateSectionTableComponent;
  let fixture: ComponentFixture<TemplateSectionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSectionTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
