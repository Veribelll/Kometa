import { TemplatePostamatUpdateDialogComponent } from './template-postamat-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatUpdateDialogComponent', () => {
  let component: TemplatePostamatUpdateDialogComponent;
  let fixture: ComponentFixture<TemplatePostamatUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
