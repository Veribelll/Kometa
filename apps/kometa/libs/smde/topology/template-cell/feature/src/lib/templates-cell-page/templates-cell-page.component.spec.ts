import { TemplatesCellPageComponent } from './templates-cell-page.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatesCellPageComponent', () => {
  let component: TemplatesCellPageComponent;
  let fixture: ComponentFixture<TemplatesCellPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesCellPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesCellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
