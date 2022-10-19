import { EmployeeUpdateDialogComponent } from './employee-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmployeeUpdateDialogComponent', () => {
  let component: EmployeeUpdateDialogComponent;
  let fixture: ComponentFixture<EmployeeUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
