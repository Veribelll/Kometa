import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestReturnDialogComponent } from './return-request-return-dialog.component';

describe('ReturnRequestReturnDialogComponent', () => {
  let component: ReturnRequestReturnDialogComponent;
  let fixture: ComponentFixture<ReturnRequestReturnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestReturnDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestReturnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
