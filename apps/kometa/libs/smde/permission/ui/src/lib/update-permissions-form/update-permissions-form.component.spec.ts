import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePermissionsFormComponent } from './update-permissions-form.component';

describe('UpdatePermissionsFormComponent', () => {
  let component: UpdatePermissionsFormComponent;
  let fixture: ComponentFixture<UpdatePermissionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePermissionsFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePermissionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
