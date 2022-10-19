import { CompanyDeleteDialogComponent } from './company-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyDeleteDialogComponent', () => {
  let component: CompanyDeleteDialogComponent;
  let fixture: ComponentFixture<CompanyDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
