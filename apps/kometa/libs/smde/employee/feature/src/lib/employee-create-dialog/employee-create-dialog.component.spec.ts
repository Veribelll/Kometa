import { EmployeeCreateDialogComponent } from './employee-create-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmployeeCreateDialogComponent', () => {
  let component: EmployeeCreateDialogComponent;
  let fixture: ComponentFixture<EmployeeCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCreateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
