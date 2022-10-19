import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePermissionsDialogComponent } from './update-permissions-dialog.component';

describe('UpdatePermissionsDialogComponent', () => {
  let component: UpdatePermissionsDialogComponent;
  let fixture: ComponentFixture<UpdatePermissionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePermissionsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePermissionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
