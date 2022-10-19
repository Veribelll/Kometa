import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNewPinCodeDialogComponent } from './send-new-pin-code-dialog.component';

describe('SendNewPinCodeDialogComponent', () => {
  let component: SendNewPinCodeDialogComponent;
  let fixture: ComponentFixture<SendNewPinCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendNewPinCodeDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendNewPinCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
