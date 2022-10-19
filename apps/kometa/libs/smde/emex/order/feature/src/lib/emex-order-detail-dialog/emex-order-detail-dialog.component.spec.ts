import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexOrderDetailDialogComponent } from './emex-order-detail-dialog.component';

describe('EmexOrderDetailDialogComponent', () => {
  let component: EmexOrderDetailDialogComponent;
  let fixture: ComponentFixture<EmexOrderDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
