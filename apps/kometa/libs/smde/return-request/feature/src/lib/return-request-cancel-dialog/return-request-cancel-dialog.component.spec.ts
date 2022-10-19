import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestCancelDialogComponent } from './return-request-cancel-dialog.component';

describe('ReturnRequestCancelDialogComponent', () => {
  let component: ReturnRequestCancelDialogComponent;
  let fixture: ComponentFixture<ReturnRequestCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestCancelDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
