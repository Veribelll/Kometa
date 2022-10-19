import { TemplatePostamatDeleteDialogComponent } from './template-postamat-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatDeleteDialogComponent', () => {
  let component: TemplatePostamatDeleteDialogComponent;
  let fixture: ComponentFixture<TemplatePostamatDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
