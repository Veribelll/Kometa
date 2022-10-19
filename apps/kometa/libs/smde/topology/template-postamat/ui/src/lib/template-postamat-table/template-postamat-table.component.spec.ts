import { TemplatePostamatTableComponent } from './template-postamat-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatTableComponent', () => {
  let component: TemplatePostamatTableComponent;
  let fixture: ComponentFixture<TemplatePostamatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
