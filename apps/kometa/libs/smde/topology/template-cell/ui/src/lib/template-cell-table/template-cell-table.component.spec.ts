import { TemplateCellTableComponent } from './template-cell-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplateCellTableComponent', () => {
  let component: TemplateCellTableComponent;
  let fixture: ComponentFixture<TemplateCellTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCellTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
