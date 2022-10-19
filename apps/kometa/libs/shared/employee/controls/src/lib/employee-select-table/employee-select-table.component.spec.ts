import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelectTableComponent } from './employee-select-table.component';

describe('EmployeeSelectTableComponent', () => {
  let component: EmployeeSelectTableComponent;
  let fixture: ComponentFixture<EmployeeSelectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeSelectTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
