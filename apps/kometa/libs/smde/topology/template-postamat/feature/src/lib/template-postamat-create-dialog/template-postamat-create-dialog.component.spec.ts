import { TemplatePostamatCreateDialogComponent } from './template-postamat-create-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatePostamatCreateDialogComponent', () => {
  let component: TemplatePostamatCreateDialogComponent;
  let fixture: ComponentFixture<TemplatePostamatCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePostamatCreateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePostamatCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
