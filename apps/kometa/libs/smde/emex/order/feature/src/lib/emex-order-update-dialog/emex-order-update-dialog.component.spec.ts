import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexOrderUpdateDialogComponent } from './emex-order-update-dialog.component';

describe('EmexOrderUpdateDialogComponent', () => {
  let component: EmexOrderUpdateDialogComponent;
  let fixture: ComponentFixture<EmexOrderUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
