import { EmployeeDetailDialogComponent } from './employee-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmployeeDetailDialogComponent', () => {
  let component: EmployeeDetailDialogComponent;
  let fixture: ComponentFixture<EmployeeDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
