import { EmployeeDeleteFormComponent } from './employee-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmployeeDeleteFormComponent', () => {
  let component: EmployeeDeleteFormComponent;
  let fixture: ComponentFixture<EmployeeDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
