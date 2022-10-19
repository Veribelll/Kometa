import { CompanyUpdateDialogComponent } from './company-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyUpdateDialogComponent', () => {
  let component: CompanyUpdateDialogComponent;
  let fixture: ComponentFixture<CompanyUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
