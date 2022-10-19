import { TemplatePostamatDetailDialogComponent } from './template-postamat-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatDetailDialogComponent', () => {
  let component: TemplatePostamatDetailDialogComponent;
  let fixture: ComponentFixture<TemplatePostamatDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
