import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLockToCellFormComponent } from './assign-lock-to-cell-form.component';

describe('AssignLockToCellFormComponent', () => {
  let component: AssignLockToCellFormComponent;
  let fixture: ComponentFixture<AssignLockToCellFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignLockToCellFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLockToCellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
