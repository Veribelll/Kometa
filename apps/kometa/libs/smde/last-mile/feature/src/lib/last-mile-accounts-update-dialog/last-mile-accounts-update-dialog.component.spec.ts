import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileAccountsUpdateDialogComponent } from './last-mile-accounts-update-dialog.component';

describe('LastMileAccountsUpdateDialogComponent', () => {
  let component: LastMileAccountsUpdateDialogComponent;
  let fixture: ComponentFixture<LastMileAccountsUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileAccountsUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileAccountsUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
