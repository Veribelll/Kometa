import { CompanyDetailDialogComponent } from './company-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyDetailDialogComponent', () => {
  let component: CompanyDetailDialogComponent;
  let fixture: ComponentFixture<CompanyDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
