import { EmployeeUpdateFormComponent } from './employee-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmployeeUpdateFormComponent', () => {
  let component: EmployeeUpdateFormComponent;
  let fixture: ComponentFixture<EmployeeUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
