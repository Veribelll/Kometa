import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPeriodUpdateDialogComponent } from './return-period-update-dialog.component';

describe('ReturnPeriodUpdateDialogComponent', () => {
  let component: ReturnPeriodUpdateDialogComponent;
  let fixture: ComponentFixture<ReturnPeriodUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnPeriodUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPeriodUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
