import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexProductDetailDialogComponent } from './emex-product-detail-dialog.component';

describe('EmexProductDetailDialogComponent', () => {
  let component: EmexProductDetailDialogComponent;
  let fixture: ComponentFixture<EmexProductDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
