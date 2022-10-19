import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelectControlComponent } from './employee-select-control.component';

describe('EmployeeSelectControlComponent', () => {
  let component: EmployeeSelectControlComponent;
  let fixture: ComponentFixture<EmployeeSelectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeSelectControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
