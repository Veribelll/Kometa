import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotYourPasswordDialogComponent } from './forgot-your-password-dialog.component';

describe('ForgotYourPasswordDialogComponent', () => {
  let component: ForgotYourPasswordDialogComponent;
  let fixture: ComponentFixture<ForgotYourPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotYourPasswordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotYourPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
