import { EmployeeTableComponent } from './employee-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmployeeTableComponent', () => {
  let component: EmployeeTableComponent;
  let fixture: ComponentFixture<EmployeeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
